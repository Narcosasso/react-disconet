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

  const currentKey =
    location.pathname === "/" ? "/" : location.pathname.toLowerCase();

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header
        style={{ display: "flex", alignItems: "center", padding: "0 10px" }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: 0,
          }}
        >
          <img src="/dd.jpg" alt="Logo" style={{ height: 40 }} />
          <Title
            level={3}
            style={{ color: "white", margin: 0, whiteSpace: "nowrap" }}
          >
            Disconet
          </Title>
        </div>

        <div style={{ flex: "2", display: "flex", justifyContent: "center" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[currentKey]}
            onClick={({ key }) => navigate(key)}
            items={[
              { key: "/", label: "Home" },
              { key: "/profilo", label: "Profilo" },
              { key: "/drink", label: "Drink" },
              { key: "/party", label: "Party" }, // <- Etichetta cambiata in Party
            ]}
          />
        </div>

        <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="primary"
            style={{ backgroundColor: "purple" }}
            danger
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Header>

      <Content style={{ padding: "50px" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Disconet ©2025 gruppo 7: Colliva,Sassone,Savino❤
      </Footer>
    </Layout>
  );
}

export default MainLayout;
