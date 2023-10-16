import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.min.css'
import App from './App';
// 再导入全局样式文件，防止样式覆盖！
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

