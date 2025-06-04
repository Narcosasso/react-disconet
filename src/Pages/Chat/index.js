import { Typography, Paragraph } from "antd";
const { Title, Paragraph: AntParagraph } = Typography;

function Home() {
  return (
    <>
      <Title>Chat</Title>
      <AntParagraph>
        Qui puoi visualizzare le tue chat con gli altri utenti
      </AntParagraph>
    </>
  );
}

export default Home;
