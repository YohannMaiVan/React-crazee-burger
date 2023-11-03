import styled from "styled-components"
import { theme } from "../../../../../../theme"
import OrderContext from "../../../../../../context/OrderContext"
import { useContext } from "react"
import { getTabSelected, getTabsConfig } from "../tabsConfig"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext)

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return <AdminPanelStyled>{tabSelected && tabSelected.label}</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box; // ajouter ça sinon ça fait grossir le panel
  padding: 30px 5%;
`
