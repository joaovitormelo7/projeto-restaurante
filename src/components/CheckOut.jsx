// src/pages/CheckoutPage.jsx
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: 32px auto;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #ff5722;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #ff5722;
  color: white;
  border: none;
  padding: 14px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #e64a19;
  }
`;

const CheckoutPage = ({ cartItems }) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const navigate = useNavigate();

  const handleFinish = () => {
    if (!nome || !telefone || !endereco) {
      alert("Preencha todos os campos!");
      return;
    }

    const pedido = cartItems
      .map((item) => `- ${item.name}: R$ ${item.price.toFixed(2)}`)
      .join("\n");
    const total = cartItems
      .reduce((acc, item) => acc + item.price, 0)
      .toFixed(2);

    const mensagem = encodeURIComponent(`
*Pedido EasyOrder:*
${pedido}

*Total:* R$ ${total}

*Nome:* ${nome}
*Telefone:* ${telefone}
*Endereço:* ${endereco}
    `);

    window.location.href = `https://wa.me/(34)991623892?text=${mensagem}`;
  };

  return (
    <Container>
      <Title>Finalizar Compra</Title>
      <Input
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <Input
        placeholder="Endereço de entrega"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <CheckoutButton onClick={handleFinish}>Enviar Pedido</CheckoutButton>
    </Container>
  );
};

export default CheckoutPage;
