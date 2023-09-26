import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../../utils/window";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};
  height: 12vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .logo-order-page {
    cursor: pointer;
  }
`;
