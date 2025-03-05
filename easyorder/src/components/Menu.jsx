import styled from "styled-components";
import menuItems from "../data/menu.json";
import { useState } from "react";

const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FilterButtons = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 260px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  background: #121212;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: #e64a19;
  }
`;

const Menu = ({ addToCart }) => {
  const [category, setCategory] = useState("all");

  const categories = ["Cardápio Completo", "Porções", "Bebidas", "Especiais"];

  const filteredItems =
    category === "Cardápio Completo"
      ? menuItems
      : menuItems.filter((item) => item.category === category);
  return (
    <MenuContainer>
      <FilterButtons>
        {categories.map((cat) => (
          <Button key={cat} onClick={() => setCategory(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </FilterButtons>
      <CardContainer>
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>R$ {item.price.toFixed(2)}</p>
            <Button onClick={() => addToCart(item)}>
              Adicionar ao Carrinho
            </Button>
          </Card>
        ))}
      </CardContainer>
    </MenuContainer>
  );
};

export default Menu;
