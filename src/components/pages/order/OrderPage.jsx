import styled from "styled-components"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { deepClone } from "../../../utils/array"

export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const [menu, setMenu] = useState(fakeMenu.MEDIUM)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()

  // comportements (gestionnaire de state ou "state handlers")

  const handleAdd = (newProduct) => {
    //1. copie du tableau
    const menuCopy = deepClone(menu)
    //2. manip de la COPIE tableau
    const menuUpdated = [newProduct, ...menuCopy]
    //3. update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    //copie du state
    const menuCopy = deepClone(menu)

    //manipulation de la copie du state
    const menuCopyUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    )

    setMenu(menuCopyUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const menuUpdating = deepClone(menu)

    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    )

    menuUpdating[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    setMenu(menuUpdating)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
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
