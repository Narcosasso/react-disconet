import { Typography, Paragraph } from "antd";
const { Title, Paragraph: AntParagraph } = Typography;

function Home() {
  return (
    <>
      <Title>Drink</Title>
      <AntParagraph>
        Qui puoi visualizzare le ultime novità, gli eventi in programma e tanto altro!
      </AntParagraph>
    </>
  );
}

export default Home;
