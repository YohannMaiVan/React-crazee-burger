import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      NAVBAR
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
