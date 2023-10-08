import { Card, Button } from 'antd';
import './index.scss'
import { Ahttp } from '@/utils';
const PickUp = () => {
  const add = async () => {
    let res = await (Ahttp.post('/pkgstate/add', {

    }))
    return res
  }
  // console.log(add())
  return (
    <div>
      <Card>
        <h1>模式</h1>
      </Card>
      <Card>
        {/* <Button></Button> */}
        <Button type='primary'
          onClick={window.location.href = './state-manage'}>
          工作人员模式
        </Button>
        
      </Card>

    </div>
  )
}
export default PickUp