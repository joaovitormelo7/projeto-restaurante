import styled from "styled-components";
import logomarca from "../assets/image/logomarca.jpeg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #000000;
  color: white;
  width: 100%;
`;

const Logo = styled.img`
  height: 180px;
  width: 200px;
  max-width: 350px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logomarca} alt="Vessile Restaurante" />
      <Nav>
        <a href="#">Página Inicial</a>
        <a href="#">Cardápio</a>
        <a href="#">Contato</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
