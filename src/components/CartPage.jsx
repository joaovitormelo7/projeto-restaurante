import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const CartTitle = styled.h2`
  text-align: center;
  color: #ff5722;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #ff5722;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
  &:hover {
    background: #e64a19;
  }
`;

const CartPage = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const message = encodeURIComponent(
      `Olá, gostaria de fazer um pedido: \n\n${cartItems
        .map((item) => `- ${item.name}: R$${item.price.toFixed(2)}`)
        .join(
          "\n",
        )}\n\nTotal: R$${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}`,
    );
    window.location.href = `https://wa.me/34991623892?text=${message}`;
  };

  return (
    <CartContainer>
      <CartTitle>Seu carrinho</CartTitle>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        cartItems.map((item, index) => (
          <CartItem key={index}>
            <span>
              {item.name} - R$ {item.price.toFixed(2)}
            </span>
          </CartItem>
        ))
      )}
      {cartItems.length > 0 && (
        <CheckoutButton onClick={handleCheckout}>
          Finalizar Pedido
        </CheckoutButton>
      )}
    </CartContainer>
  );
};

export default CartPage;
