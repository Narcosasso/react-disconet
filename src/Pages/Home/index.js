import React from "react";
import { Typography, Row, Col, Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/party");
  };

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>Sei pronto alla festa?</Title>

      <Row gutter={24} align="stretch">
        {/* Colonna sinistra - Logo + Descrizione + Bottone */}
        <Col xs={24} md={14}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Image
              src="/logogay.png"
              alt="Disconet Logo"
              width="300px"
              preview={false}
              style={{
                borderRadius: 12,
                marginBottom: "16px",
                boxShadow: "0 0 12px rgba(114, 46, 209, 0.5)",
              }}
            />

            <Paragraph
              style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: 24 }}
            >
              <strong>Disconet</strong> è la tua app per vivere la notte al
              massimo. Scopri gli eventi più esclusivi, acquista biglietti in
              pochi clic e ordina drink direttamente dal tuo smartphone.
              <br />
              <br />
              Connettiti alla serata, evita le file e goditi l’esperienza al
              100%.
            </Paragraph>

            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#722ed1", borderColor: "#722ed1" }}
              onClick={handleDiscoverClick}
            >
              Scopri gli eventi
            </Button>
          </div>
        </Col>

        {/* Colonna destra - Immagini */}
        <Col xs={24} md={10}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Image
                src="/H.jpeg"
                alt="Discoteca 1"
                width="100%"
                style={{ borderRadius: 12 }}
              />
            </Col>
            <Col span={12}>
              <Image
                src="/F.jpg"
                alt="Discoteca 2"
                width="100%"
                style={{ borderRadius: 12 }}
              />
            </Col>
            <Col span={12}>
              <Image
                src="/C.jpg"
                alt="Discoteca 3"
                width="100%"
                style={{ borderRadius: 12 }}
              />
            </Col>
            <Col span={12}>
              <Image
                src="/B.jpg"
                alt="Discoteca 4"
                width="100%"
                style={{ borderRadius: 12 }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
