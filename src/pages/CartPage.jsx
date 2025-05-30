import styled from "styled-components";
import { useState } from "react";

const Page = styled.div`
  background: #f5f5f5;
  color: #f5f5f5;
  min-height: 100vh;
  padding: 40px 5% 120px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  flex: 1 1 350px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.03);
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #333;
  font-size: 14px;
`;

const Total = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
`;

const Frete = styled.p`
  margin-top: 6px;
  font-size: 13px;
  color: #8aff8a;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 6px;
  background: #2a2a2a;
  color: #fff;
  border: 1px solid #444;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 6px;
  background: #2a2a2a;
  color: #fff;
  border: 1px solid #444;
  resize: vertical;
  min-height: 80px;
`;


const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 6px;
  background: #2a2a2a;
  color: #fff;
  border: 1px solid #444;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ffffff;
  color: #000000;
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #e4e4e4;
  }
`;

const Empty = styled.p`
  text-align: center;
  color: #999;
  font-size: 14px;
`;
const CartPage = ({ cartItems }) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("Dinheiro");
  const [observacao, setObservacao] = useState("");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  const handleSend = () => {
    if (!nome || !telefone || !endereco) {
      alert("Preencha todos os campos!");
      return;
    }

    const itens = cartItems
      .map(
        (item) =>
          `- ${item.name} (x${item.quantity}): R$ ${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n");

    const mensagem = encodeURIComponent(`
🍔 *Pedido Vessile Lanches*

🧾 *Itens:*
${itens}

💵 *Total:* R$ ${total}
🚚 *Frete:* Grátis
🙋 *Nome:* ${nome}
📞 *Telefone:* ${telefone}
📍 *Endereço:* ${endereco}
💳 *Pagamento:* ${pagamento}
📝 *Observações:* ${observacao || "Nenhuma"}
    `);

    window.location.href = `https://wa.me/5534991623892?text=${encodeURIComponent(mensagem)}`; 
  
  };

  return (
    <Page>
      <Box>
        <Title>Resumo do Pedido</Title>
        {cartItems.length === 0 ? (
          <Empty>O carrinho está vazio</Empty>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Item key={index}>
                <span>{item.name} (x{item.quantity})</span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </Item>
            ))}
            <Total>Total: R$ {total}</Total>
            <Frete>Frete: Grátis</Frete>
          </>
        )}
      </Box>

      <Box>
        <Title>Seus Dados</Title>

        <Label>Nome</Label>
        <Input
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Label>Telefone</Label>
        <Input
          placeholder="(xx) xxxxx-xxxx"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <Label>Endereço</Label>
        <Input
          placeholder="Rua, nº, bairro, cidade"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

        <Label>Pagamento</Label>
        <Select
          value={pagamento}
          onChange={(e) => setPagamento(e.target.value)}
        >
          <option>Cartão de Crédito</option>
          <option>Cartão de Débito</option>
          <option>Dinheiro</option>
          <option>Pix</option>
        </Select>

        <Label>Observações</Label>
        <TextArea
          placeholder="Ex: sem cebola, trocar o refri por suco..."
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />

        <Button onClick={handleSend}>Enviar Pedido pelo WhatsApp</Button>
      </Box>
    </Page>
  );
};

export default CartPage;