import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background-color: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  color: #f5f5f5;
  font-family: 'Outfit', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 60px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 18px;
  color: #d0d0d0;
  line-height: 1.7;
  font-weight: 300;
`;

const Strong = styled.strong`
  color: #00ff88;
  font-weight: 600;
`;

const ContactList = styled.div`
  margin-top: 20px;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactItem = styled.p`
  margin: 0;
  color: #e4e4e4;

  a {
    color: #00ff88;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MapaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 280px;
  height: 280px;
  margin: 30px auto 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  overflow: hidden;
`;

const PaginaContato = () => {
  return (
    <PageContainer>
      {/* Seção SOBRE NÓS */}
      <Section>
        <Title>🥪 Sobre Nós</Title>
        <Text>
          O <Strong>Vessile Lanches e Sabores</Strong> nasceu em uma garagem com um sonho gigante: 
          levar até você lanches e refeições feitos com muito <Strong>carinho</Strong>, <Strong>dedicação</Strong> e <Strong>qualidade</Strong>.
          <br /><br />
          Cada detalhe conta: desde o pão quentinho até a batata crocante e o atendimento acolhedor. 
          <br /><br />
          Somos pequenos no espaço, mas gigantes na vontade de oferecer o melhor lanche da sua vida.
          <br /><br />
          <Strong>Vessile: onde simplicidade e sabor se encontram ❤️</Strong>
        </Text>
      </Section>

      {/* Seção CONTATO */}
      <Section>
        <Title>📞 Fale com a Gente</Title>
        <ContactList>
          <ContactItem>📱 Telefone: <a href="tel:+5534998291261">(34) 99829-1261</a></ContactItem>
          <ContactItem>📸 Instagram: <a href="" target="_blank" rel="noopener noreferrer">@vessilelanches</a></ContactItem>
        </ContactList>
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
  );
};

export default PaginaContato;
