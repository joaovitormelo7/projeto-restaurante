import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #121212;
  color: white;
  text-align: center;
  padding: 16px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getUTCFullYear()} EasyOrder - Todos os direitos
        reservados.{" "}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
