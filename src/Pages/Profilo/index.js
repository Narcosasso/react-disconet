import "../../App.css";
import "antd/dist/reset.css";
import { useEffect, useRef, useState } from "react";
import { Avatar, Button, Card, Divider, Form, Space, Typography } from "antd";
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
          title={
            <div
              style={{ display: "flex", alignItems: "center", color: "purple" }}
            >
              <img
                src="./erre.png"
                alt="Logo"
                style={{
                  height: 12.5,
                  marginRight: 8,
                  alignItems: "center",
                }} // distanza tra img e testo
              />
              <Typography.Text style={{ alignItems: "center" }}>
                Bar sala Techno
              </Typography.Text>
            </div>
          }
          hoverable={true}
          style={{ width: 600 }}
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
            <Button type="primary" style={{ backgroundColor: "purple" }}>
              Modifica
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
            title={
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Marco Bellinelli
              </div>
            }
            description={
              <div style={{ textAlign: "center", marginTop: 8 }}>
                la mia tripla preferita? vodka, redbull e powerade
              </div>
            }
          ></Card.Meta>
          <div style={{ textAlign: "center", marginTop: 15 }}>
            marcobellinelli86@gmail.com <br /> 25/03/1986 <br /> Sesso: M
            <Divider />
            <div
              style={{
                textAlign: "center",
                fontSize: 18,
                marginTop: 20,
                fontWeight: "bold",
                color: "purple",
              }}
            >
              STATISTICHE PERSONALI
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: 15,
                marginTop: 20,
                marginTop: 10,
              }}
            >
              drink preferito: Jaegerbomb <br />
              numero drink acquistati: 40 <br />
              musica preferita: Techno <br />
              numero party: 46 <br />
              numero eventi: 31
            </div>
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default App;
