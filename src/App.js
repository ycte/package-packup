// 导入路由
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
// import { Button } from 'antd';
import 'antd/dist/reset.css';

// 导入页面组件
import Login from './pages/Login'
import BaseLayout from '@/pages/Layout';
import { AuthRoute } from './components/AuthRouth';
import Home from './pages/Home';
import PickUp from './pages/PickUp';
import StateManage from './pages/StateManage';
import Info from './pages/Info';
import ScanQRCode from './pages/QRCode';

function App() {
  return (
    // <div className="App">
    //   APP
    // </div>
    <BrowserRouter>
      <div className='App'>
        {/* <Button type="primary">Button</Button> */}
        <Routes>
          <Route path='/' element={
            <AuthRoute>
              <BaseLayout/>
            </AuthRoute>
          }>
            {/* 二级路由 */}
            <Route index element={<Home/>}/>
            <Route path='/pick-up' element={<PickUp/>}/>
            <Route path='/state-manage' element={<StateManage/>}/>
            <Route path='/info' element={<Info/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/qrcode' element={<ScanQRCode/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
