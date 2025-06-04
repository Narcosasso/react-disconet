import { Button, Divider, Form, Input, Space, Typography, message } from "antd";
import {
  FacebookFilled,
  GoogleOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  // Funzione che viene chiamata al login corretto
  const handleLogin = () => {
    message.success("Login effettuato"); // Messaggio di successo
    onLogin(); // Cambia stato autenticazione
    navigate("/"); // Reindirizza alla Home
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom right, #2a064d, #8e44ad, #5c3d99, #6dd5ed)", // sfumatura viola-blu
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite", // animazione sfondo sfumato
        overflow: "hidden",
        position: "relative",
        padding: "40px",
      }}
    >
      {/* CSS personalizzato inline con lo style tag */}
      <style>
        {`
          /* Animazione per lo sfondo sfumato */
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }

          /* Cambia colore degli asterischi obbligatori nei Form.Item */
          .ant-form-item-required::before {
            color: #4b0082 !important; /* Viola scuro */
          }

          /* Stile dei pallini luce discoteca */
          .disco-dot {
            position: absolute;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.3); /* Bianco trasparente */
            animation: blink 1.5s infinite ease-in-out alternate;
          }

          /* Animazione dei puntini: lampeggio */
          @keyframes blink {
            0% { opacity: 0.2; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.5); }
          }
        `}
      </style>

      {/* 40 puntini animati sparsi random per effetto discoteca */}
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="disco-dot"
          style={{
            top: `${Math.random() * 100}%`, // posizione verticale random
            left: `${Math.random() * 100}%`, // posizione orizzontale random
            animationDelay: `${Math.random() * 2}s`, // delay diverso per ogni puntino
          }}
        />
      ))}

      {/* Layout principale a due colonne */}
      <Space direction="horizontal" size={100} style={{ zIndex: 2 }}>
        {/* Colonna immagine/logo */}
        <div style={{ display: "flex", justifyContent: "left" }}>
          <img
            src="/IMG_5786.png"
            alt="Logo"
            style={{ width: 500, marginBottom: 24 }}
          />
        </div>

        {/* Colonna modulo login */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)", // sfondo trasparente bianco per effetto vetro
            padding: 32,
            borderRadius: 16,
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            {/* FORM login */}
            <Form className="loginForm" onFinish={handleLogin}>
              {/* Titolo con effetto neon */}
              <Typography.Title
                style={{
                  fontSize: "28px",
                  color: "white",
                  textShadow: "0 0 12px #4b0082, 0 0 20px #4b0082",
                  marginLeft: "18px",
                }}
              >
                Connettiti alla Festa
              </Typography.Title>

              {/* Campo Username */}
              <Form.Item
                colon={false}
                label={<span style={{ color: "white" }}>Username: </span>}
                name="username"
                rules={[{ required: true, message: "Inserisci l'username" }]}
              >
                <Input placeholder="email" />
              </Form.Item>

              <Form.Item
                colon={false}
                label={<span style={{ color: "white" }}>Password: </span>}
                name="password"
                rules={[{ required: true, message: "Inserisci la password" }]}
              >
                <Input.Password placeholder="password" />
              </Form.Item>

              {/* Bottone di login, viola scuro */}
              <Button
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#4b0082",
                  borderColor: "#4b0082",
                  color: "white",
                }}
              >
                Login
              </Button>

              {/* Divider e social login */}
              <Divider style={{ borderColor: "white", color: "white" }}>
                o accedi con
              </Divider>

              {/* Icone social */}
              <div
                className="socialLogin"
                style={{
                  display: "flex",
                  gap: 32, // spazio maggiore tra le icone
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GoogleOutlined
                  style={{ fontSize: 24, color: "white", cursor: "pointer" }}
                  onClick={handleLogin}
                />
                <FacebookFilled
                  style={{ fontSize: 24, color: "white", cursor: "pointer" }}
                  onClick={handleLogin}
                />
                <InstagramOutlined
                  style={{ fontSize: 24, color: "white", cursor: "pointer" }}
                  onClick={handleLogin}
                />
              </div>

              {/* Link registrazione */}
              <Typography.Paragraph
                style={{
                  marginTop: "40px",
                  color: "white",
                  marginLeft: "103px",
                }}
              >
                o registrati{" "}
                <a
                  href="#"
                  style={{ color: "#4b0082", textDecoration: "underline" }}
                >
                  qui
                </a>
              </Typography.Paragraph>
            </Form>
          </Space>
        </div>
      </Space>
    </div>
  );
}

export default LoginPage;
