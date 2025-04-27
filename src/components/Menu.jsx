import styled from "styled-components";
import menuItems from "../data/menu.json";
import { useState } from "react";

const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 300px - 80px);
  background: #fff;
  padding: 40px 5%;
`;

const FilterButtons = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  background: #121212;
  color: #fff;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;
  font-size: 16px;

  &:hover {
    background: #484d50;
  }
`;

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Menu = ({ addToCart }) => {
  const [category, setCategory] = useState("todas");

  const categories = [
    "todas",
    ...new Set(menuItems.map((item) => item.category.toLowerCase())),
  ];

  const filteredItems =
    category === "todas"
      ? menuItems
      : menuItems.filter((item) => item.category.toLowerCase() === category);
  return (
    <MenuContainer>
      <FilterButtons>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{ background: cat === category ? "#484d50" : "#121212" }}
          >
            {capitalize(cat)}
          </Button>
        ))}
      </FilterButtons>
      <CardContainer>
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              <strong>R$ {item.price.toFixed(2)}</strong>
            </p>
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
