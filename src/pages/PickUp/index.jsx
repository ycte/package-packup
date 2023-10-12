import { Card, Button } from 'antd';
import './index.scss'
import { Ahttp } from '@/utils';
const PickUp = () => {
  const staffModel = () => {
    window.location.href = '/state-manage'
  }
  const add = async () => {
    let res = await (Ahttp.post('/pkgstate/add', {

    }))
    console.log('pick-up pages:', res)
    return res
  }
  // console.log(add())
  return (
    <div>
      <Card>
        <h1>学生包裹管理</h1>
        <Button type='primary'
          onClick={staffModel}>
          工作人员模式
        </Button>
      </Card>
      <Card>
        {/* <Button></Button> */}
        <Button type='primary'
          onClick={() => add()}>
          添加一个默认包裹
        </Button>
        {/* <div>
          <h3>默认包裹信息</h3>
          <p>pkgId: 'userId-'+'n'</p>
          <p>content: 'hhh'</p>
          <p>state: 'init'</p>


        </div> */}

      </Card>

    </div>
  )
}
export default PickUp