import { useState } from "react";
import styled from "styled-components";

// Exemplo de produtos iniciais
const produtosIniciais = [
  { id: 1, name: "Filé de Tilápia", price: 45.00 },
  { id: 2, name: "Fritas Vessile", price: 70.00 },
  { id: 3, name: "Ceviche", price: 30.00 },
];

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  color: #1a1a1a;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

const Produto = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 16px;
  background: #000;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    background: #333;
  }
`;

const AdminPage = () => {
  const [produtos, setProdutos] = useState(produtosIniciais);

  const handleChange = (id, field, value) => {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [field]: field === "price" ? parseFloat(value) : value } : p
      )
    );
  };

  const handleSalvar = () => {
    console.log("Produtos atualizados:", produtos);
    alert("Alterações salvas com sucesso!");
  };

  return (
    <Container>
      <Title>Painel de Administração</Title>

      {produtos.map((produto) => (
        <Produto key={produto.id}>
          <Input
            type="text"
            value={produto.name}
            onChange={(e) => handleChange(produto.id, "name", e.target.value)}
            placeholder="Nome do produto"
          />
          <Input
            type="number"
            value={produto.price}
            onChange={(e) => handleChange(produto.id, "price", e.target.value)}
            placeholder="Preço"
          />
        </Produto>
      ))}

      <Button onClick={handleSalvar}>Salvar Alterações</Button>
    </Container>
  );
};

export default AdminPage;
