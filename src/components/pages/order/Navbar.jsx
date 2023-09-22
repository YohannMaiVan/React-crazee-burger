import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo.jsx";
import { theme } from "../../../theme";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .left-side {
    background: pink;
  }
`;
