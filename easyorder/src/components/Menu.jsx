import styled from "styled-components";
import menuItems from "../data/menu.json";

const MenuContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 280px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Button = styled.button`
  background: #ff5722;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 8px;
  transition: background 0.3s;

  &:hover {
    background: #e64a19;
  }
`;

const Menu = ({ addToCart }) => {
  return (
    <MenuContainer>
      {menuItems.map((item) => (
        <Card key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>R$ {item.price.toFixed(2)}</p>
          <Button onClick={() => addToCart(item)}>Adicionar ao Carrinho</Button>
        </Card>
      ))}
    </MenuContainer>
  );
};

export default Menu;
