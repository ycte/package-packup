import { Button, Descriptions } from "antd"
import { getToken, http } from "@/utils"

const Info = () => {
  async function getInfo() {
    const token = getToken()
    try {
      console.log(token)
      http.interceptors.request.use(config => {

        config.headers.Authorization =
          `Bearer ${token}`;
        return config;
      })
      const data = (await http.get('/users/me'))
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  function GetNo() {
    return <span>22920202207777</span>
  }
  function GetCollege() {
    return <span>信息学院</span>
  }
  function GetName() {
    return <span>哈哈哈</span>
  }
  function GetTel() {
    return <span>(这是一个电话)</span>
  }
  function GetAddress() {
    return (
      <div>
        {<GetCollege />}
        <br />
        翔安校区学生公寓一期
        <br />
        芙蓉学生公寓
        <br />
        芙蓉x号楼xxxx
        <br />
        <span>{<GetName />},{<GetTel />}</span>
      </div>
    )
  }
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
      <Button>退出登录</Button>
    </div>
  )
}
export default Info