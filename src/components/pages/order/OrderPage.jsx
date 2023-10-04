import styled from "styled-components";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  //comportements

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isEditSelected,
    setIsEditSelected,
    isAddSelected,
    setIsAddSelected,
  };
  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
