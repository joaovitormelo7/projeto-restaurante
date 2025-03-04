import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
//import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";

const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <SideBar />
        <Content>
          <Menu addToCart={addToCart} />
        </Content>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </MainContainer>
      <Footer />
    </AppContainer>
  );
};

export default App;
