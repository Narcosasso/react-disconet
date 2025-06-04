import { Layout, Menu, Typography, Button, message } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    message.info("Sei stato disconnesso.");
    navigate("/login");
  };

  const currentKey =
    location.pathname === "/" ? "/" : location.pathname.toLowerCase();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          backgroundColor: "#4b0082", // viola scuro
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src="/dd.jpg" alt="Logo" style={{ height: 40 }} />
          <Title level={3} style={{ color: "white", margin: 0 }}>
            Disconet
          </Title>
        </div>

        <Menu
          mode="horizontal"
          align="center"
          selectedKeys={[currentKey]}
          onClick={({ key }) => navigate(key)}
          items={[
            { key: "/", label: "Home" },
            { key: "/profilo", label: "Profilo" },
            { key: "/drink", label: "Drink" },
            { key: "/party", label: "Party" },
          ]}
        />

        <Button
          type="primary"
          danger
          style={{ marginLeft: "auto" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Header>

      <Content style={{ padding: "50px" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Disconet ©2025 gruppo 7: Colliva, Sassone, Savino ❤
      </Footer>
    </Layout>
  );
}

export default MainLayout;
