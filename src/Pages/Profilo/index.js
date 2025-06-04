import "../../App.css";
import "antd/dist/reset.css";
import { useEffect, useRef, useState } from "react";
import { Avatar, Button, Card, Divider, Form, Space } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

function App() {
  return (
    <div className="App-header">
      <Space direction="vertical">
        <Card
          title="personal profile"
          hoverable={true}
          style={{ width: 320 }}
          actions={[
            //actions serve per aggiungere azioni nella parte inferiore del componente
            <FacebookFilled style={{ color: "purple" }} />,
            <TwitterOutlined style={{ color: "purple" }} />,
            <InstagramOutlined style={{ color: "purple" }} />,
            <YoutubeFilled style={{ color: "purple" }} />,
          ]}
          cover={
            <div
              style={{
                height: 120,
                width: "100%",
                textAlign: "center",
                background: "linear-gradient(#FF007A,#4200FF)",
                color: "white",
                fontSize: 25,
                paddingTop: 40,
                fontFamily: "serif",
              }}
            >
              BELLINELLI86
            </div>
          }
          extra={
            <Button type="primary" style={{ backgroundColor: "red" }}>
              Details
            </Button>
          }
        >
          <Card.Meta
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -60,
              alignItems: "center",
            }}
            avatar={
              <Avatar
                size={150}
                marginTop={-1000}
                src={
                  "https://www.sportfair.it/wp-content/uploads/2019/03/Marco-Belinelli.jpg"
                }
              />
            }
            title={"Marco Bellinelli"}
            description="la mia tripla preferita? vodka, redbull e powerade"
          ></Card.Meta>
          <p style={{ textAlign: "center", marginTop: 30 }}>
            This is the content of the card
          </p>
        </Card>
      </Space>
    </div>
  );
}

export default App;
