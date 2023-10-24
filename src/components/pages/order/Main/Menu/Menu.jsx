import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/Card"
import { formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
  const { menu, handleDelete, isModeAdmin, resetMenu, setProductSelected } =
    useContext(OrderContext)
  //state

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleClick = (idProductClicked) => {
    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked
    )
    setProductSelected(productClickedOn)
  }

  //affichage

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }
  return (
    <MenuStyled>
      {menu.map(({ title, imageSource, price, id }) => (
        <Card
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
          leftDescription={formatPrice(price)}
          id={id}
          key={id}
          onDelete={() => handleDelete(id)}
          hasDeleteButton={isModeAdmin}
          onClick={() => handleClick(id)}
        />
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`
