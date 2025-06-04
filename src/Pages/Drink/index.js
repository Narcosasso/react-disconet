import React, { useState } from "react";
import {
  Typography,
  List,
  Row,
  Col,
  Image,
  Button,
  Space,
  Drawer,
  Divider,
  message,
} from "antd";

const { Title, Paragraph } = Typography;

const drinks = [
  {
    name: "Mojito",
    price: 8,
    alcoholContent: 13,
    description:
      "Un cocktail rinfrescante cubano a base di rum bianco, lime, zucchero di canna, menta fresca e soda. Perfetto per le giornate estive.",
  },
  {
    name: "Negroni",
    price: 12,
    alcoholContent: 24,
    description:
      "Classico italiano composto da gin, vermut rosso e bitter Campari. Dal gusto forte e amaro, ideale come aperitivo.",
  },
  {
    name: "Martini",
    price: 10,
    alcoholContent: 28,
    description:
      "Un'icona dell'eleganza: gin e vermut dry mescolati e serviti con oliva o scorza di limone. Secco e deciso.",
  },
  {
    name: "Spritz",
    price: 5,
    alcoholContent: 8,
    description:
      "Aperitivo leggero e frizzante a base di Aperol o Campari, prosecco e soda. Originario del Veneto, molto popolare in Italia.",
  },
  {
    name: "Gin Tonic",
    price: 8,
    alcoholContent: 14,
    description:
      "Semplice ma intramontabile, composto da gin e acqua tonica. Fresco, aromatico, con note amarognole.",
  },
  {
    name: "Whiskey Sour",
    price: 10,
    alcoholContent: 18,
    description:
      "Un mix equilibrato di whiskey, succo di limone fresco e zucchero. Talvolta arricchito con albume d’uovo per una texture vellutata.",
  },
];

function Home() {
  const [purchased, setPurchased] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleBuy = (drink) => {
    setPurchased((prev) => [...prev, drink]);
    setVisible(true);
  };

  const handleRemove = (indexToRemove) => {
    setPurchased((prevPurchased) =>
      prevPurchased.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <>
      <Title>Drink</Title>
      <Paragraph>
        Ecco il Menù dei nostri Drink, scegli il tuo preferito!
      </Paragraph>

      <Row gutter={24}>
        <Col xs={24} md={12}>
          <List
            header={<strong>Lista dei Drink</strong>}
            bordered
            dataSource={drinks}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="primary"
                    style={{ backgroundColor: "purple" }}
                    onClick={() => handleBuy(item)}
                  >
                    Acquista
                  </Button>,
                ]}
              >
                <Space direction="vertical" size={0}>
                  <div style={{ fontWeight: "bold" }}>{item.name}</div>
                  <div style={{ color: "purple" }}>Prezzo: €{item.price}</div>
                  <div>Gradazione: {item.alcoholContent}%</div>
                  <div>{item.description}</div>
                </Space>
              </List.Item>
            )}
          />
        </Col>
        <Col
          xs={24}
          md={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Image
            width="81.5%vh" // evita di usare più del 100% se non necessario
            src="./raffa.png"
            alt="Drink"
            style={{ borderRadius: 8 }}
          />
        </Col>
      </Row>

      <Divider />

      <Drawer
        open={visible} //parametro const
        title={
          <Title level={3} style={{ color: "purple" }}>
            Drink Acquistati
          </Title>
        }
        footer={"Continua ad acquistare con noi!"}
        closable={true} //X grande per chiudere il drawer
        maskClosable={true} //abilita la chiusura del drawer quando l’utente clicca fuori
        onClose={() => {
          setVisible(false);
        }}
        placement="bottom"
      >
        {purchased.length === 0 ? (
          <Paragraph>Nessun drink acquistato ancora.</Paragraph>
        ) : (
          <List
            bordered
            dataSource={purchased}
            renderItem={(item, index) => (
              <>
                <List.Item key={index}>
                  {item.name} - €{item.price}
                  <div
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginTop: "8px",
                      marginLeft: "16px",
                    }}
                    onClick={() => handleRemove(index)}
                  >
                    Rimuovi drink
                  </div>
                </List.Item>
              </>
            )}
          />
        )}

        <Button
          onClick={() => {
            setVisible(false);
          }}
          style={{ backgroundColor: "red", color: "white", marginTop: 20 }}
        >
          Close
        </Button>

        <Button
          onClick={() => {
            setVisible(false);
            message.success("Acquisto effettuato con successo!");
            setPurchased([]);
          }}
          style={{ backgroundColor: "purple", color: "white", marginTop: 20 }}
        >
          Buy
        </Button>
      </Drawer>
    </>
  );
}

export default Home;
