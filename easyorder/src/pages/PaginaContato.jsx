import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  padding: 40px 5%;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 28px;
  color: #121212;
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  font-size: 18px;
  color: #484d50;
  margin: 8px 0;
`;

const MapaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 250px;
  height: 250px;
  margin-top: 20px auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const PaginaContato = () => {
  return (
    <>
      <Header />
      <ContactContainer>
        <ContactTitle>Entre em Contato</ContactTitle>
        <ContactInfo>Telefone: (34)99829-1261</ContactInfo>
        <MapaContainer>
          <iframe
            widht="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=-19.3181174,-46.0362715&hl=pt-br&z=16&output=embed"
            allowFullScreen
          ></iframe>
        </MapaContainer>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default PaginaContato;
