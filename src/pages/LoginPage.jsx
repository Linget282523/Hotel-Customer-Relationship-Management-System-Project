import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from '../components/Login';
import './Pages.css';

const LoginPage = () => {
  return (
    <div className='form-box'>
      <h1>Login</h1>
      <Login/>
      <p>
        Or <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default LoginPage;


{/* <Form
name="normal_login"
className="login-form"
initialValues={{ remember: true }}
onFinish={onFinish}
>
<Login/>
<Form.Item
  name="username"
  rules={[{ required: true, message: 'Please input your Username!' }]}
>
  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
</Form.Item>
<Form.Item
  name="password"
  rules={[{ required: true, message: 'Please input your Password!' }]}
>
  <Input
    prefix={<LockOutlined className="site-form-item-icon" />}
    type="password"
    placeholder="Password"
  />
</Form.Item>
<Form.Item>
  <Form.Item name="remember" valuePropName="checked" noStyle>
    <Checkbox>Remember me</Checkbox>
  </Form.Item>

  <a className="login-form-forgot" href="">
    Forgot password
  </a>
</Form.Item>

<Form.Item>
  <Button type="primary" htmlType="submit" className="login-form-button">
    Log in
  </Button>
  Or <Link to='/register'>register now!</Link>
</Form.Item>
</Form> */}