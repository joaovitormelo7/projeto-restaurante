import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import CartIcon from "./components/CartIcon";
import PaginaContato from "./pages/PaginaContato";
import { useState } from "react";

const AppContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
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
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Content>
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
    </AppContainer>
  );
};

export default App;
