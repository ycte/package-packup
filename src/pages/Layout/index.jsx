import {
  Layout,
  FloatButton,
  Dropdown,
  Space,
} from 'antd'
import {
  MenuOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import './index.scss'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { clearToken } from '@/utils'

const {
  Header,
} = Layout
const items = [
  {
    label: (
      <Link to="/">行李管理</Link>
    ),
    key: 'myPkt',
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
  clearToken()
  window.location.href = '/login'
}

const BaseLayout = () => {
  const [current, setCurrent] = useState('layout-dropdown');
  const onClick = (e) => {
    // console.log('>Layout-click:', e);
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
          <span className='layout-dropdown-container'>
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
                  <MenuOutlined
                    style={{ fontSize: '24px'}} />
                </Space>
              </Link>
            </Dropdown>
          </span>
        </div>
      </Header>
      <div className='body'>
        <Layout className="layout-content">
          <Outlet />
        </Layout>
        <div>
          <FloatButton onClick={clickFloatBton} type="primary"
            icon={<ArrowRightOutlined />} />
        </div>
      </div>
    </Layout>
  )
}

export default BaseLayout