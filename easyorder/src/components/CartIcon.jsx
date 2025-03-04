import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff5722;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #e64a19;
  }
`;

const CartIcon = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <CartButton onClick={() => navigate("/carrinho")}>
      🛒 ({cartItems.length})
    </CartButton>
  );
};

export default CartIcon;
