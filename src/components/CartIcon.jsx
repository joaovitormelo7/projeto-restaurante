import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: black;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;

  &:hover {
    background: #444444;
  }
`;

//Fix botão de carrinho
const CartIcon = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <CartButton onClick={() => navigate("/carrinho")}>
      🛒 ({cartItems.length})
    </CartButton>
  );
};

export default CartIcon;
