// 1. 判断token是否存在
// 2. 如果存在 直接正常渲染
// 3. 如果不存在 重定向到登录路由

// 高阶组件:把一个组件当成另外一个组件的参数传入 然后通过一定的判断 返回新的组件
import { getToken } from "@/utils"
// import { Navigate } from 'react-router-dom'
import { Modal } from "antd"
import { useState } from "react";

function AuthRoute ({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return (
      <>
        {children}
        <Modal title="未登录……" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>账号后台 API 制作中...</p>
        </Modal>
      </>
    )
    // return <Navigate to="/login" replace />
  }
}

// <AuthComponent> <Layout/> </AuthComponent>
// 登录：<><Layout/></>
// 非登录：<Navigate to="/login" replace />

export { AuthRoute }