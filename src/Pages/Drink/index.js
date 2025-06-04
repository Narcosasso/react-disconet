import React, { useState } from "react";
import {
  Typography,
  List,
  Row,
  Col,
  Image,
  Button,
  Space,
  Divider,
} from "antd";

const { Title, Paragraph } = Typography;

const drinks = [
  { name: "Mojito", price: 10 },
  { name: "Negroni", price: 10 },
  { name: "Martini", price: 10 },
  { name: "Spritz", price: 10 },
  { name: "Gin Tonic", price: 10 },
  { name: "Whiskey Sour", price: 10 },
];

function Home() {
  const [purchased, setPurchased] = useState([]);

  const handleBuy = (drink) => {
    setPurchased((prev) => [...prev, drink]);
  };

  return (
    <>
      <Title>Drink</Title>
      <Paragraph>
        Qui puoi visualizzare le ultime novità, gli eventi in programma e tanto
        altro!
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
                  <Button type="primary" onClick={() => handleBuy(item)}>
                    Acquista
                  </Button>,
                ]}
              >
                <Space direction="vertical" size={0}>
                  <div>{item.name}</div>
                  <div>Prezzo: €{item.price}</div>
                </Space>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} md={12}>
          <Image
            width="80%"
            src="./raffa.png"
            alt="Drink"
            style={{ borderRadius: 8 }}
          />
        </Col>
      </Row>

      <Divider />

      <Title level={3}>Drink Acquistati</Title>
      {purchased.length === 0 ? (
        <Paragraph>Nessun drink acquistato ancora.</Paragraph>
      ) : (
        <List
          bordered
          dataSource={purchased}
          renderItem={(item, index) => (
            <List.Item key={index}>
              {item.name} - €{item.price}
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export default Home;
