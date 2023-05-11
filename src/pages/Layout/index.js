import { Layout,
  FloatButton, 
  // Breadcrumb,
  Dropdown,
  Space,
  
} from 'antd'
import {
  // HomeOutlined,
  // DiffOutlined,
  // EditOutlined,
  // DownOutlined,
  MenuOutlined,
  ArrowRightOutlined,
//   LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const { 
  Header, 
  // Content 
} = Layout
const items = [
  // {
  //   label: '',
  //   key: 'totalMenu',
  //   icon: <MenuOutlined />,
  //   children: [
      {
        label: (
          <Link to="/">我的行李</Link>
        ),
        key: 'myPkt',
      },
      {
        label: (
          <Link to="/pick-up">行李收发</Link>
        ),
        key: 'pickUp',
      },
      {
        label: (
          <Link to="/state-manage">行李登记</Link>
        ),
        key: 'stateManage',
      },
      {
        label: (
          <Link to="/info">个人信息</Link>
        ),
        key: 'info',
      }
    // ]

  // }
]
const clickFloatBton = () => {
  window.location.href='/login'
}

const BaseLayout = () => {
  const [current, setCurrent] = useState('layout-dropdown');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Layout className='layout-total'>
      <Header className="header">

        <div>
          <Link to='/' className='layout-title'>
            <h1>
              行李 pick
            </h1>
          </Link>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [current],
            }}
            className='layout-dropdown'
          >
            <Link type="link" onClick={onClick}>
              <Space>
                <MenuOutlined />
              </Space>
            </Link>
          </Dropdown>
          {/* <Menu mode="horizontal" items={items} selectedKeys={[current]} onClick={onClick}
            className='menu'/> */}
        </div>
        
      </Header>
      <body className='body'>
        {/* 二级路由对应显示 */}
        <Layout className="layout-content">
          {/* 二级路由默认页面 */}
          <Outlet />
        </Layout>
        {/* <div className="logo" /> */}
        {/* <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              退出
            </Popconfirm>
          </span>
        </div> */}
        <div>
          <FloatButton onClick={clickFloatBton} type="primary" 
           icon={<ArrowRightOutlined />}/>
        </div>
      </body>
      
    </Layout>
  )
}

export default BaseLayout