import { Button, Descriptions } from "antd"
// import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { getToken, http, clearToken } from "@/utils"


const Info = () => {
  const [infoMap, setInfoMap] = useState({
    address: '厦门市翔安区',
    college: '计算机学院',
    isActive: true,
    name: '李小行',
    tel: '13800000',
    userId: '2292020220????',
    username: 'john',
  });
  const getInfo = async () => {
    const token = getToken()
    // console.log(token)
    // TODO: 直接接入路由跳转
    if (!token) {
      console.log('no token')
      // return <Navigate to="/login" replace />
    }
    try {
      // console.log(token)
      http.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      })
      let res = (await http.get('/users/me')).data
      console.log('infoMap:', res)
      return res
    } catch (e) {
      console.log('get user info err:', e)
    }
  }
  useEffect(() => {
    getInfo().then(res => {
      setInfoMap(res)
    })
  }, [])
  
  // TODO: how to expire jwt
  const logout = () => {
    clearToken()
    window.location.replace('/login')
  }

  return (
    <div>
      <Descriptions
        bordered
        // title="Custom Size"
        size='middle'
      // extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="学工号/车辆代号">{infoMap.userId}</Descriptions.Item>
        <Descriptions.Item label="学院/部门">{infoMap.college}</Descriptions.Item>
        <Descriptions.Item label="姓名">{infoMap.name}</Descriptions.Item>
        <Descriptions.Item label="联系方式">{infoMap.tel}</Descriptions.Item>
        {/* <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item> */}
        <Descriptions.Item label="送达地址/节点信息">
          {infoMap.address}
        </Descriptions.Item>
      </Descriptions>
      <Button onClick={getInfo}>获取信息</Button>
      <Button onClick={logout}>退出登录</Button>
    </div>
  )
}
export default Info