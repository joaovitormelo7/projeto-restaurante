import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartIcon from "./components/CartIcon";
import PaginaContato from "./pages/PaginaContato";
import { useState, lazy, Suspense } from "react";

const CartPage = lazy(() => import("./pages/CartPage"));

const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  align-items: center;
`;

const DecorativeBar = styled.div`
  width: 100%;
  height: 20px;
  background: linear-gradient(to right, #000000, #C0C0C0, #ffffff);
  box-shadow: 0 2px 6px rgba(192, 192, 192, 0.4), 0 4px 12px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 100%;
    top: 0;
    left: -10%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.4), transparent 70%);
    animation: shimmer 2.5s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: #1a1a1a;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
  max-width: 600px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scrollbar-width: thin;
  scrollbar-color: #999 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
  }

  label {
    font-weight: bold;
    margin-top: 8px;
    color: #444;
  }

  select, input[type="checkbox"] + label {
    margin-top: 4px;
    margin-bottom: 8px;
  }

  select {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 16px;
    padding: 12px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #222;
  }
`;

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showMassaModal, setShowMassaModal] = useState(false);
  const [massaBaseItem, setMassaBaseItem] = useState(null);
  const [massaOptions, setMassaOptions] = useState({ massa: '', ingredientes: [], molho: '', temperos: [] });

  const addToCart = (item) => {
    if (item.name === "Monte sua Massa") {
      setMassaBaseItem(item);
      setShowMassaModal(true);
      return;
    }
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      const updatedCart = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <CartIcon cartItems={cartItems} />
      <Suspense fallback={<div style={{ color: 'white', margin: '2rem' }}>Carregando página...</div>} />
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Content>
                <DecorativeBar />
                <Title>Conheça nosso cardápio</Title>
                <Description>
                  Delícias preparadas com carinho esperando por você. Selecione seus itens preferidos e monte seu pedido com praticidade!
                </Description>
                <Menu addToCart={addToCart} />
              </Content>
            </MainContainer>
          }
        />
        <Route
          path="/carrinho"
          element={<CartPage cartItems={cartItems} />}
        />
        <Route
          path="/contato"
          element={
            <MainContainer>
              <Content>
                <PaginaContato />
              </Content>
            </MainContainer>
          }
        />
        <Route
          path="*"
          element={
            <MainContainer>
              <Content>
                <h1>Página não encontrada</h1>
              </Content>
            </MainContainer>
          }
        />
      </Routes>
      <Footer />

      {showMassaModal && massaBaseItem && (
        <ModalOverlay onClick={() => setShowMassaModal(false)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <h2>Monte sua massa 🍝</h2>

            <label>Tipo de massa:</label>
            <select onChange={(e) => setMassaOptions(prev => ({ ...prev, massa: e.target.value }))}>
              <option value="">Escolha a massa</option>
              {massaBaseItem.massas.map(m => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <label>Molho:</label>
            <select onChange={(e) => setMassaOptions(prev => ({ ...prev, molho: e.target.value }))}>
              <option value="">Escolha o molho</option>
              {massaBaseItem.molhos.map(m => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <label>Ingredientes:</label>
            {massaBaseItem.ingredientes.map((ing) => (
              <div key={ing}>
                <input
                  type="checkbox"
                  value={ing}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const value = e.target.value;
                    const novos = checked
                      ? [...massaOptions.ingredientes, value]
                      : massaOptions.ingredientes.filter(a => a !== value);
                    setMassaOptions(prev => ({ ...prev, ingredientes: novos }));
                  }}
                />
                <label>{ing}</label>
              </div>
            ))}

            <label>Temperos:</label>
            {massaBaseItem.temperos.map((temp) => (
              <div key={temp}>
                <input
                  type="checkbox"
                  value={temp}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const value = e.target.value;
                    const novos = checked
                      ? [...massaOptions.temperos, value]
                      : massaOptions.temperos.filter(a => a !== value);
                    setMassaOptions(prev => ({ ...prev, temperos: novos }));
                  }}
                />
                <label>{temp}</label>
              </div>
            ))}

            <button
              onClick={() => {
                const newItem = {
                  id: Date.now(),
                  name: `${massaBaseItem.name} (${massaOptions.massa})`,
                  description: `Molho: ${massaOptions.molho}\nIngredientes: ${massaOptions.ingredientes.join(', ')}\nTemperos: ${massaOptions.temperos.join(', ')}`,
                  price: massaBaseItem.price,
                  quantity: 1
                };
                setCartItems([...cartItems, newItem]);
                setShowMassaModal(false);
                setMassaOptions({ massa: '', ingredientes: [], molho: '', temperos: [] });
              }}
            >
              Adicionar ao carrinho
            </button>
          </ModalBox>
        </ModalOverlay>
      )}
    </AppContainer>
  );
};

export default App;
