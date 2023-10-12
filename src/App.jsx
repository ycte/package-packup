import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import 'antd/dist/reset.css';

import Login from './pages/Login'
import BaseLayout from '@/pages/Layout';
import { AuthRoute } from './components/AuthRouth';
import Home from './pages/Home';
import PickUp from './pages/PickUp';
import StateManage from './pages/StateManage';
import Info from './pages/Info';
import ScanQRCode from './pages/QRCode';
import StateView from './pages/State';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <AuthRoute>
              <BaseLayout />
            </AuthRoute>
          }>
            {/* 二级路由 */}
            <Route index
              element={<Home />}
              />
            <Route path='/state/:pkgid' element={<StateView />} />
            <Route path='/pick-up' element={<PickUp />} />
            <Route path='/state-manage' element={<StateManage />} />
            <Route path='/info' element={<Info />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/qrcode' element={<ScanQRCode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
