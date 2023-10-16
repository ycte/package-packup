import { Ahttp } from '@/utils';
import { Input, Card, Button, Select, Form } from 'antd';
import { Todo } from '@/components/Todo';
const StateManage = () => {
  const onFinish = async (values) => {
    console.log('Success:', values);
    const res = await Ahttp.post('/pkgstate/alter', {
      pkgId: values.pkgId,
      state: values.state,
      reason: '测试一下',
    })
    console.log(res);
    return res;
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      在这里工作人员改变行李状态,一个表单,设置状态,手动输入和扫码
      <br />
      <Todo>提交成功弹出一个 modal, 再次扫码和返回首页</Todo>
      <Card>

        <Form
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            pkgId: '22920202208888-4',
            state: 'goon',
          }}
        >
          <Form.Item
            label="pkgId：(后面会先进一个扫码界面，二维码信息就是这个)"
            name="pkgId"
            rules={[
              { required: true, message: 'pkgid 不能为空!', },
              // { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
            ]}
          >
            <Input size="large"
              placeholder="请输入pkgId"
              />
          </Form.Item>
          <Form.Item
            label="state：(等 role 做好了，可以去掉这个，staff 的地址就是 reason)"
            name="state"
            rules={[
              { required: true, message: 'state 不能为空!', },
            ]}
          >
            <Select
              
              style={{
                width: 90,
              }}
              options={[
                {
                  value: "start",
                  label: "已装车",
                },
                {
                  value: "goon",
                  label: "运输中",
                },
                {
                  value: "finish",
                  label: "已到达",
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              修改
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default StateManage