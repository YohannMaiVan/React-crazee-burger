import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "./Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu2);

  //comportements

  //affichage
  return (
    <MenuStyled>
      {menu.map(({ title, imageSource, price, id }) => {
        return (
          <Card
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            id={id}
            key={id}
          />
        );
      })}
    </MenuStyled>
  );
}
const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
