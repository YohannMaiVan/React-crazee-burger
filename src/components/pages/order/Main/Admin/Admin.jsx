import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return <AdminStyled>Admin</AdminStyled>;
}

const AdminStyled = styled.div`
  background: red;
  height: 250px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
