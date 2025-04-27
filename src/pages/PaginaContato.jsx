import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 32px auto;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #121212;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #484d50;
  line-height: 1.6;
`;

const MapaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 250px;
  height: 250px;
  margin: 20px auto 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const PaginaContato = () => {
  return (
    <>
      <Header />
      <PageContainer>
        {/* Seção SOBRE NÓS */}
        <Section>
          <Title>Sobre Nós</Title>
          <Text>
            O Vessile Lanches e Sabores nasceu em uma garagem, mas com um
            propósito gigante: oferecer refeições saborosas, feitas com muito
            carinho e dedicação. Aqui, cada lanche, porção ou bebida é preparado
            com ingredientes de qualidade e aquele toque caseiro que conquista.
            <br />
            <br />
            Somos pequenos no espaço, mas grandes no cuidado com cada detalhe.
            Do atendimento à entrega, tudo é feito com amor — e isso faz toda a
            diferença no sabor.
            <br />
            <br />
            <strong>Vessile: onde simplicidade e sabor se encontram ❤️</strong>
          </Text>
        </Section>

        {/* Seção CONTATO */}
        <Section>
          <Title>Entre em Contato</Title>
          <Text>Telefone: (34) 99829-1261</Text>
          <Text>Instagram: @vessilelanches</Text>
          <MapaContainer>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=-19.3181174,-46.0362715&hl=pt-br&z=16&output=embed"
              allowFullScreen
              title="Localização do Vessile"
            ></iframe>
          </MapaContainer>
        </Section>
      </PageContainer>
      <Footer />
    </>
  );
};

export default PaginaContato;
