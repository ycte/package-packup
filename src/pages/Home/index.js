import { Card, Tag, Timeline} from "antd"
import { Link } from "react-router-dom";
import { Collapse, Input } from 'antd';
import './index.scss';
// import { QrcodeOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const theItems = [
  {
    color: 'gray',
    children: '3-27 17:56 从厦门北站装车'
  },
  {
    color: 'green',
    // dot: <SmileOutlined />,
    children: '已到达一期凉亭'
  }
]
const getItem = (id) => {
  return theItems
}
const data = [
  {
    key: 1,
    id: '229202276301',
    states: '已签收',
    state: '已签收',
    pick_id: '10-2777-1',
  },
  {
    key:2,
    id: '229202276302',
    states: '已签收',
    state: '运输中',
    pick_id: '10-2777-2',
  },
  {
    key:3,
    id: '229202276302',
    states: '已签收',
    state: '未开始',
    pick_id: '10-2777-3',
  }
]

const GetState = (props) => {
  let color = props.state === '已签收' ? 'green':'geekblue';
      if (props.state === '未开始') {
            color = 'volcano';
      }
      return (
        <Tag color={color}>
          <Link to={'home'}>{props.state}</Link>
        </Tag>
      );
}

const Home = () => {
  return (
    
    <div>
      <div className="QRIcon">
        {/* <QrcodeOutlined className="antd_qrcode"/> */}
        {/* <svg><use xlink:href=""></use></svg> */}
        {/* qrcode svg */}
        <svg t="1683812549550" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6622" width="200" height="200"><path d="M149.443 445.076a36.383 36.383 0 0 1-36.383-36.382v-50.54c0-135.977 110.628-246.6 246.605-246.6h20.213a36.383 36.383 0 0 1 0 72.766h-20.213c-95.852 0-173.835 77.978-173.835 173.83v50.539a36.393 36.393 0 0 1-36.387 36.387z m727.68 0a36.383 36.383 0 0 1-36.383-36.382v-50.54c0-95.851-77.983-173.829-173.834-173.829h-20.214a36.383 36.383 0 0 1 0-72.765h20.214c135.977 0 246.604 110.622 246.604 246.6v50.539a36.388 36.388 0 0 1-36.387 36.377zM737.649 469.33v-63.672c0-65.04-53.213-118.247-118.247-118.247H407.158c-65.04 0-118.247 53.212-118.247 118.247v63.672H737.65z" fill="#687899" opacity=".5" p-id="6623"></path><path d="M962.017 529.971H64.543a36.383 36.383 0 0 0 0 72.766h48.512V665.4c0 135.977 110.628 246.6 246.605 246.6h26.275a36.383 36.383 0 0 0 0-72.765H359.66c-95.852 0-173.835-77.978-173.835-173.83v-62.663h103.086v15.16c0 65.04 53.213 118.246 118.247 118.246h212.24c65.038 0 118.246-53.212 118.246-118.246v-15.16H840.73v62.663c0 95.852-77.983 173.83-173.835 173.83H652.75a36.383 36.383 0 0 0 0 72.765h14.146C802.872 912 913.5 801.377 913.5 665.4v-62.663h48.512a36.383 36.383 0 0 0 0.005-72.766z" fill="#687899" p-id="6624"></path></svg>
        <Input
          placeholder="点击上方按钮扫码或者在此输入编码"
          className="idInput"
        />
      </div>
      <Card className="pkgCard">
        我的行李
      </Card>
      <div>
        { 
          data.map((value,key) => {
            // console.log("pktInfo Card");
            // console.log(value);
            return (
              <Card className="pktInfo" key={key}>
                <GetState state={value.state}/>
                <li
                  key={key} style=
                  {{ fontSize: "x-large", fontWeight: 777 }}
                >
                  {value.pick_id}
                </li> 
                <Collapse defaultActiveKey={['1']} ghost>
                  <Panel header="点击查看包裹状态" key={value.id} >
                    <Timeline items={getItem(value.id)}/>
                  </Panel>
                </Collapse> 
              </Card>
            );
          })
        }
      </div>
    </div>
  )
}
export default Home