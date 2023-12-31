// TODO: 修改地址信息
import { Button, Descriptions } from "antd"
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
    if (!token) {
      console.log('no token')
    }
    try {
      http.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      })
      let res = (await http.get('/users/me')).data
      console.log('>Info-getInfo:', res)
      return res
    } catch (e) {
      console.error('get user info err:', e)
      clearToken()
    }
  }
  useEffect(() => {
    getInfo().then(res => {
      setInfoMap(res)
    })
  }, [])
  
  const refreshInfo = async () => {
    let res = await getInfo()
    setInfoMap(res)
  }
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
      {/* TODO: 重新渲染 */}
      <Button onClick={refreshInfo}>获取信息</Button>
      <Button onClick={logout}>退出登录</Button>
    </div>
  )
}
export default Info