import { Button, Descriptions } from "antd"
// import { Navigate } from "react-router-dom";
import { getToken, http, clearToken } from "@/utils"

var infoMap = {
  address: '厦门市翔安区',
  college: '计算机学院',
  isActive: true,
  name: '李小行',
  tel: '13800000',
  userId: '2292020220????',
  username: 'john',
};
const getInfo = async () => {
  const token = getToken()
  // console.log(token)
  // TODO: 直接接入路由跳转
  if (!token) {
    console.log('no token')
    // return <Navigate to="/login" replace />
  }
  try {
    console.log(token)
    http.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    })
    infoMap = (await http.get('/users/me')).data
    console.log(infoMap)
  } catch (e) {
    console.log('get user info err:', e)
  }
}
const GetNo = () =>
  <span>{infoMap.userId}</span>
const GetCollege = () =>
  <span>{infoMap.college}</span>
const GetName = () =>
  <span>{infoMap.name}</span>
const GetTel = () =>
  <span>{infoMap.address}</span>
const GetAddress = () =>
  <span>{infoMap.address}</span>

// TODO: how to expire jwt
const logout = () => {
  clearToken()
  window.location.replace('/login')
}
const Info = () => {
  getInfo();

  return (
    <div>
      <Descriptions
        bordered
        // title="Custom Size"
        size='middle'
      // extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="学工号/车辆代号">{<GetNo />}</Descriptions.Item>
        <Descriptions.Item label="学院/部门">{<GetCollege />}</Descriptions.Item>
        <Descriptions.Item label="姓名">{<GetName />}</Descriptions.Item>
        <Descriptions.Item label="联系方式">{<GetTel />}</Descriptions.Item>
        {/* <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item> */}
        <Descriptions.Item label="送达地址/节点信息">
          {<GetAddress />}
        </Descriptions.Item>
      </Descriptions>
      <Button onClick={getInfo}>获取信息</Button>
      <Button onClick={logout}>退出登录</Button>
    </div>
  )
}
export default Info