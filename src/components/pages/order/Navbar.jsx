import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo.jsx";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <div className="left-side">LEFT</div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .left-side {
    background: pink;
  }
`;
