import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../theme"
import Card from "../../../reusable-ui/Card"
import { formatPrice } from "../../../../utils/maths"
import OrderContext from "../../../../context/OrderContext"

export default function Menu() {
  //state
  const { menu } = useContext(OrderContext)

  //affichage
  return (
    <MenuStyled>
      {menu.map(({ title, imageSource, price, id }) => (
        <Card
          title={title}
          imageSource={imageSource}
          leftDescription={formatPrice(price)}
          id={id}
          key={id}
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
