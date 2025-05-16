import styled from "styled-components";
import logomarca from "../assets/image/logomarca.jpeg";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  background: #000000;
  color: white;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 280px;
  width: auto;
  max-width: 350px;
  margin-bottom: 16px;
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
        <Link to="/">Página Inicial</Link>
        <Link to="/contato">Sobre Nós</Link>
        <Link to="/carrinho">Carrinho</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
