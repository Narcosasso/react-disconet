import { Layout, Menu, Typography, Button, message } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    message.info("Sei stato disconnesso.");
  };

  const currentKey = location.pathname === "/" ? "/" : location.pathname;

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", padding: "0 30px" }}>
        <div style={{ flex: "1", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/dd.jpg" alt="Logo" style={{ height: 50 }} />
          <Title level={2} style={{ color: "white", margin: 0 }}>Disconet</Title>
        </div>

        <div style={{ flex: "2", display: "flex", justifyContent: "center" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[currentKey]}
            onClick={({ key }) => navigate(key)}
            items={[
              { key: "/", label: "Home" },
              { key: "/eventi", label: "Eventi" },
              { key: "/profilo", label: "Profilo" },
              { key: "/drink", label: "Drink" },
              { key: "/biglietti", label: "Biglietti" },
            ]}
          />
        </div>

        <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Header>

      <Content style={{ padding: "50px" }}>
        <Outlet /> {/* Qui viene renderizzato il contenuto delle pagine */}
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Disconet ©2025 Creato con ❤
      </Footer>
    </Layout>
  );
}

export default MainLayout;
