import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function Header({ children, version }) {
  return <HeaderStyled version={version}>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;

  ${(props) =>
    props.version === "footer" &&
    css`
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
    `}
`
