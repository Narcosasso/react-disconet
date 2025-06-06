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
  QRCode,
} from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";

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
  const [carrello, setCarrello] = useState([]);
  const [ordini, setOrdini] = useState([]);
  const [carrelloVisible, setCarrelloVisible] = useState(false);
  const [ordiniVisible, setOrdiniVisible] = useState(false);

  // Oggetto per tenere traccia di QR visibili, key: indice ordini, value: stringa QR
  const [visibleQRs, setVisibleQRs] = useState({});

  const handleBuy = (drink) => {
    setCarrello((prev) => [...prev, drink]);
    setCarrelloVisible(true);
  };

  const handleRemove = (indexToRemove) => {
    setCarrello((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const totale = carrello.reduce((acc, item) => acc + item.price, 0);

  const confermaAcquisto = () => {
    if (carrello.length === 0) {
      message.warning("Il carrello è vuoto.");
      return;
    }
    setOrdini((prev) => [...prev, ...carrello]);
    setCarrello([]);
    setCarrelloVisible(false);
    message.success("Acquisto effettuato con successo!");
  };

  // Funzione per generare un QR Code random e mostrarlo per un drink specifico
  const generaQR = (index) => {
    // Genera una stringa random (ad es. UUID-like o semplice random)
    const randomCode = `drink-ticket-${index}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setVisibleQRs((prev) => ({
      ...prev,
      [index]: randomCode,
    }));
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
                    style={{ backgroundColor: "#4b0082" }}
                    onClick={() => handleBuy(item)}
                  >
                    Aggiungi al Carrello
                  </Button>,
                ]}
              >
                <Space direction="vertical" size={0}>
                  <div style={{ fontWeight: "bold" }}>{item.name}</div>
                  <div style={{ color: "#4b0082" }}>Prezzo: €{item.price}</div>
                  <div>Gradazione: {item.alcoholContent}%</div>
                  <div>{item.description}</div>
                </Space>
              </List.Item>
            )}
          />

          <Divider />

          <Button
            onClick={() => setOrdiniVisible(true)}
            style={{ backgroundColor: "#4b0082", color: "white" }}
          >
            MIEI TICKET
          </Button>
        </Col>

        <Col
          xs={24}
          md={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Image
            width="81.5%vh"
            src="./raffa.png"
            alt="Drink"
            style={{ borderRadius: 8 }}
          />
        </Col>
      </Row>

      {/* Drawer: Carrello */}
      <Drawer
        open={carrelloVisible}
        title={
          <Title level={3} style={{ color: "#4b0082", margin: 0 }}>
            CARRELLO
            <ShoppingCartOutlined
              style={{ fontSize: "24px", color: "#4b0082", marginLeft: 8 }}
            />
          </Title>
        }
        onClose={() => setCarrelloVisible(false)}
        placement="right"
        footer="Conferma i tuoi drink!"
      >
        {carrello.length === 0 ? (
          <Paragraph>Il carrello è vuoto.</Paragraph>
        ) : (
          <>
            <List
              bordered
              dataSource={carrello}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  {item.name} - €{item.price}
                  <DeleteOutlined
                    style={{
                      marginLeft: 10,
                      color: "#4b0082",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemove(index)}
                  />
                </List.Item>
              )}
            />
            <Divider />
            <Paragraph>
              <strong>Totale:</strong> €{totale}
            </Paragraph>
          </>
        )}

        <div style={{ marginTop: 20 }}>
          <Button
            onClick={() => setCarrelloVisible(false)}
            style={{ marginRight: 10 }}
          >
            Chiudi
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "#4b0082", color: "white" }}
            onClick={confermaAcquisto}
          >
            Acquista
          </Button>
        </div>
      </Drawer>

      {/* Drawer: Drink Acquistati */}
      <Drawer
        open={ordiniVisible}
        title={
          <Title level={3} style={{ color: "#4b0082", margin: 0 }}>
            Drink Acquistati
          </Title>
        }
        onClose={() => setOrdiniVisible(false)}
        placement="bottom"
        footer="Grazie per aver ordinato con noi!"
      >
        {ordini.length === 0 ? (
          <Paragraph>Non hai ancora effettuato acquisti.</Paragraph>
        ) : (
          <List
            bordered
            dataSource={ordini}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      {item.name} - €{item.price}
                    </span>
                    {!visibleQRs[index] && (
                      <Button
                        type="primary"
                        style={{ backgroundColor: "#4b0082", color: "white" }}
                        onClick={() => generaQR(index)}
                      >
                        Genera QR Code
                      </Button>
                    )}
                  </div>

                  {visibleQRs[index] && (
                    <div style={{ marginTop: 10 }}>
                      <QRCode value={visibleQRs[index]} />
                      <div style={{ marginTop: 8 }}>
                        <Button
                          type="default"
                          style={{ backgroundColor: "#4b0082", color: "white" }}
                          onClick={() =>
                            setVisibleQRs((prev) => {
                              const updated = { ...prev };
                              delete updated[index];
                              return updated;
                            })
                          }
                        >
                          chiudi codice QR
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </List.Item>
            )}
          />
        )}
      </Drawer>
    </>
  );
}

export default Home;
