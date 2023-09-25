import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary_burger};
  border: none;
  text-decoration: none;
  color: ${theme.colors.white};
  border-radius: 5px;
  font-size: 15px;
  height: 53px;
  cursor: pointer;

  &:active {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary_burger};
  }
`;
