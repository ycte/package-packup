import { Ahttp } from '@/utils';
import { Input, Card, Button, Select, Form } from 'antd';
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
      <Card>

        <Form
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="pkgId："
            name="pkgId"
            rules={[
              { required: true, message: 'pkgid 不能为空!', },
              // { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
            ]}
          >
            <Input size="large"
              placeholder="请输入pkgId"
              defaultValue={'22920202208888-4'} />
          </Form.Item>
          <Form.Item
            label="state："
            name="state"
            rules={[
              { required: true, message: 'state 不能为空!', },
            ]}
          >
            <Select
              defaultValue="运输中"
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