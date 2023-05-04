import React, { PureComponent } from 'react';
// import '../index.less';
import jsQR from 'jsqr';


let scanner = null;

let video = null;
let canvasElement = null;
let canvas = null;
let loadingMessage = null;
let outputContainer = null;
let outputMessage = null;
let outputData = null;

export default class ScanQRCode extends PureComponent {
  
  componentDidMount() {
    const that = this;
    video = document.createElement('video');
    canvasElement = document.getElementById('canvas');
    canvas = canvasElement.getContext('2d');
    loadingMessage = document.getElementById('loadingMessage');
    outputContainer = document.getElementById('output');
    outputMessage = document.getElementById('outputMessage');
    outputData = document.getElementById('outputData');

    console.log(navigator.mediaDevices )

    // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }

    // 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
    // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        // 首先，如果有getUserMedia的话，就获得它
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        // 否则，为老的navigator.getUserMedia方法包裹一个Promise
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { facingMode: "environment" } })
      .then(function (stream) {
        // 旧的浏览器可能没有srcObject
        video.srcObject = stream;
        video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
        video.play();
        window.requestAnimationFrame(that.tick);
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message);
      });
  }

  handleStartCode = () => {
    scanner.start();
  };

  componentWillUnmount() {}

  drawLine = (begin, end, color) => {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  };

  tick = () => {
    loadingMessage.innerText = '⌛ Loading video...';
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      loadingMessage.hidden = true;
      canvasElement.hidden = false;
      outputContainer.hidden = false;

      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });
      if (code && code.data) {
        console.log(code);
        this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
        this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
        this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
        this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
        outputMessage.hidden = true;
        outputData.parentElement.hidden = false;
        outputData.innerText = code.data;
        // 跳转路径
        // this.props.history.replace(
        //   // `/client-mng/individual-business-mng/list/detail/${code.data}-selfEERegister-scan`
        //   "/login"
        // );
        // window.location.href='/';
      } else {
        outputMessage.hidden = false;
        outputData.parentElement.hidden = true;
      }
    }
    window.requestAnimationFrame(this.tick);
  };

  render() {
    return (
      <div>
        <div id="loadingMessage">
          🎥 Unable to access video stream (please make sure you have a webcam enabled)
        </div>
        <canvas id="canvas" hidden></canvas>
        <div id="output" hidden>
          <div id="outputMessage">No QR code detected.</div>
          <div hidden>
            <b>Data:</b> 
            <span id="outputData">
              {/* <Modal title="未登录……" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>账号后台 API 制作中...</p>
              </Modal> */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

