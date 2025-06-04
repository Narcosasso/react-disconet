import "antd/dist/reset.css";
import "../AppLogin.css";
import { Button, Divider, Form, Input, Space, Typography, message } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

function LoginPage({ onLogin }) {
  const handleLogin = () => {
    message.success("Login effettuato");
    onLogin(); // <-- comunica che il login è stato fatto
  };

  return (
    <Space direction="horizontal" size={100}>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <img
          src="/IMG_5786.png"
          alt="Logo"
          style={{ width: 500, marginBottom: 24 }}
        />
      </div>

      <div className="App-header">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form className="loginForm" onFinish={handleLogin}>
            <Typography.Title style={{ fontSize: "28px" }}>
              Connettiti alla Festa
            </Typography.Title>

            <Form.Item
              label="Username:"
              name="username"
              rules={[{ required: true, message: "Inserisci l'username" }]}
            >
              <Input placeholder="email" />
            </Form.Item>

            <Form.Item
              label="Password:"
              name="password"
              rules={[{ required: true, message: "Inserisci la password" }]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Login
            </Button>

            <Divider style={{ borderColor: "white" }}>o accedi con</Divider>

            <div className="socialLogin">
              <GoogleOutlined className="socialIcon" onClick={handleLogin} />
              <FacebookFilled className="socialIcon" onClick={handleLogin} />
              <InstagramOutlined className="socialIcon" onClick={handleLogin} />
            </div>

            <Typography.Paragraph style={{ marginTop: "40px" }}>
              o registrati{" "}
              <a href="#" style={{ color: "white" }}>
                qui
              </a>
            </Typography.Paragraph>
          </Form>
        </Space>
      </div>
    </Space>
  );
}

export default LoginPage;
