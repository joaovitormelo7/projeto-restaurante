import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

const LoginAdmin = ({ setIsAdmin }) => {
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); // ✅ useNavigate deve estar dentro do componente

  const handleSubmit = () => {
    if (senha === "adminVessile") {
      setIsAdmin(true);
      navigate("/admin"); // ✅ redireciona após login
    } else {
      alert("Acesso negado");
    }
  };

  return (
    <Container>
      <Box>
        <h2>Área Administrativa</h2>
        <Input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button onClick={handleSubmit}>Entrar</Button>
      </Box>
    </Container>
  );
};

export default LoginAdmin;
