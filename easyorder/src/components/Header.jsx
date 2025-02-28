import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #ff5722;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Logo = styled.div`
  font-size: 28px;
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
      <Logo>EasyOrder</Logo>
      <Nav>
        <a href="#">Home</a>
        <a href="#">Cardápio</a>
        <a href="#">Contato</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
