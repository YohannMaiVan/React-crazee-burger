import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(2.5);
  margin-top: 1vh;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 40px;
    width: 60px; //for safari and firefox
    margin: 0 5px;
  }
`;
