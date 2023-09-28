import {Button, Card, Form, Input, Checkbox, message, FloatButton} from 'antd'
import 'antd/dist/reset.css';
import './index.scss'
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';

const clickFloatBton = () => {
  window.location.href='/'
}

const Login = () => {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async values => {
    console.log(">Login-Finish:", values);
    try {
      await loginStore.login ({
          username: values.username,
          password: values.password
      })
      navigate('/')
    } catch (e) {
      message.error("登录失败")
    } 
  } 
  const onFinishFailed = (values) => {
    console.error(">Login-Error:", values)
  }
  
  return( 
    <div className='login'>
      <Card className='login-container'>
        <div className='login-title'>快来寄行李！</div>
        <Form 
          validateTrigger={['onBlur', 'onChange']}
          onFinish = {onFinish}
          onFinishFailed = {onFinishFailed}
        >
          <Form.Item 
            label="账号："
            name="username"
            rules={[
              { required: true, message: '用户名不能为空!', },
              // { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
            ]}
          >
            <Input size="large" placeholder="请输入帐号" />
          </Form.Item>
          <Form.Item 
            label="密码："
            name="password"
            rules={[
              { required: true, message: '密码不能为空!', },
              { min:6, max: 16, message:'密码长度在6-16位之间', 
                validateTrigger: 'onChange'},
            ]}
          >
            <Input.Password size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
        {/* <Button type='primary'>Login</Button> */}
      </Card>
      <div>
        <FloatButton onClick={clickFloatBton} />
      </div>
    </div>
  )
}

export default Login