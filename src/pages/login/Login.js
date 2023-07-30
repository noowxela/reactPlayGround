import React, { useState } from 'react';

// Ant Design
import { Form, Input, Button, Row, Col, Card, Spin, Layout, Image, Checkbox } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// import logo from '../../assets/images/logo.svg';
import logo from '../../logo.svg';
import { useAuth } from '../../hooks/useAuth';

const { Content, Footer } = Layout;
const { Item } = Form;

export default function Login() {
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentYear = new Date().getFullYear();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 30,
      }}
      spin
    />
  );

  const handleSubmit = (values) => {
    setLoading(true);
    
    login({
      token: { },
      user: { name:"admin", role:{ type:"admin" } },
      permission: []
    });
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Content >
          <>
            <Row type="flex" style={{marginTop:"10em", marginBottom:"1.25em"}} justify="space-around" align="middle">
              <Image src={logo} width={400} preview={false}></Image>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <h1>Log into your Dashboard account</h1>
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col sm={24} md={10} lg={6}>
                {loading === false ? (
                  <Card bordered={false} hoverable={false}>
                    <Form
                      name="normal_login"
                      initialValues={{
                        remember: false,
                      }}
                      onFinish={(val) => handleSubmit(val)}
                      // autoComplete={false}
                    >
                      <Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your email!',
                          },
                        ]}
                      >
                        <Input
                          size='large'
                          placeholder="Email"
                        />
                      </Item>

                      <Item
                        name="password"
                        size='large'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input.Password
                          type="password"
                          placeholder="Password"
                          size='large'
                        />
                      </Item>

                      <Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                      </Item>

                      <Item>
                        {error && (
                          <>
                            <small style={{ color: 'red' }}>{error}</small>
                            <br />
                          </>
                        )}
                      
                        <Button
                          size='large'
                          type="primary"
                          block
                          htmlType="submit"
                        >
                          Login
                        </Button>
                      </Item>
                    </Form>
                  </Card>
                ) : (
                  <div >
                    <Spin size="large" indicator={antIcon} spinning={loading} />
                  </div>
                )}
              </Col>
            </Row>
          </>
        </Content>
        <Footer
          style={{ backgroundColor: '#f0f2f5', textAlign: 'center' }}
        >
          <h4> Copyright ©{currentYear} xxxx</h4>
        </Footer>
      </Layout>
    </>
  );
}
