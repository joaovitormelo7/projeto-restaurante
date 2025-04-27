import { styled } from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import CheckoutPage from "./components/CheckOut";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
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
    setCartItems([...cartItems, item]);
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
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
        <Route path="/carrinho" element={<CartPage cartItems={cartItems} />} />
        <Route
          path="/finalizar"
          element={<CheckoutPage cartItems={cartItems} />}
        />
      </Routes>
      <Footer />
    </AppContainer>
  );
};
export default App;
