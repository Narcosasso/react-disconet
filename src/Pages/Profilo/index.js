import { Typography, Paragraph } from "antd";
const { Title, Paragraph: AntParagraph } = Typography;

function Home() {
  return (
    <>
      <Title>Il tuo profilo</Title>
      <AntParagraph>
        Qui puoi visualizzare le ultime novità, gli eventi in programma e tanto altro!
      </AntParagraph>
    </>
  );
}

export default Home;
