import styled from "styled-components"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"

export default function OrderPage() {
  //state
  const [menu, setMenu] = useState(fakeMenu.SMALL)
  const [isModeAdmin, setIsModeAdmin] = useState(true) //to develop F08

  const [isCollapsed, setIsCollapsed] = useState(true) // to develop F08
  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  //comportements
  // gestionnaire de state (state handler)
  const handleAdd = (newProduct) => {
    //1. copie du tableau
    const menuCopy = [...menu]
    //2. manip de la COPIE tableau
    const menuUpdated = [newProduct, ...menuCopy]
    //3. update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    console.log("idOfProductToDelete: ", idOfProductToDelete)
    //copie du state
    const menuCopy = [...menu]

    //manipulation de la copie du state
    const menuCopyUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    )

    setMenu(menuCopyUpdated)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
  }
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
  )
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
`
