import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd'; // Removed Icon
import logo from '../../images/logo.png';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';

const Login = (props) => { // Changed to functional component
  const onFinish = async (values) => { // Changed handleSubmit to onFinish, values are passed directly
    console.log('Received values of form: ', values);
    const formData = new FormData();
    // Use values from the form callback directly
    formData.append('login_username', values.username);
    formData.append('login_password', values.password);
    try {
      const response = await fetch('http://localhost/secure-code/cors2.php', {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });
      alert(await response.text());
    } catch (e) {
      console.error(e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Row justify="center" align="middle" style={{ height: '100vh' }}> {/* Removed type="flex" */}
        <Col md={8} sm={12} xs={24}>
          <img src={logo} alt="Logo Fakebook" style={{ width: '100%', paddingLeft: '24px', paddingRight: '24px', maxWidth: '400px' }}></img>
        </Col>
        <Col md={8} sm={12} xs={24}>
          {/* Changed onSubmit to onFinish and onFinishFailed */}
          <Form
            name="login"
            className="login-form"
            style={{ maxWidth: '400px', width: '100%' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical" // Added for better default layout, can be adjusted
          >
            <Form.Item
              label="Username"
              name="username" // Replaced getFieldDecorator
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password" // Replaced getFieldDecorator
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Row>
              <Col span={12}>
                <Form.Item> {/* Form.Item should wrap Button for layout consistency if needed, or Button can be standalone */}
                  <Link to='/signup'>
                    <Button block type="link">
                      Signup
                    </Button>
                  </Link>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Button block type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = {
  login: login,
};

// Removed Form.create(), connect directly to the component
export default connect(null, mapDispatchToProps)(Login);