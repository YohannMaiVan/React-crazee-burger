import styled from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  //affichage
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: ${theme.fonts.size.P1} ${theme.fonts.size.P3};
  margin: ${theme.fonts.size.P1} 0;

  .icon-input {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.SM};
    margin-right: 12px;
  }

  input {
    border: none;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline-color: ${theme.colors.greyMedium};
      -webkit-transition: outline-color 0.7s ease-out 1s;
      -moz-transition: outline-color 0.7s ease-out 1s;
      -o-transition: outline-color 0.7s ease-out 1s;
      transition: outline-color 0.7s ease-out 1s;
    }
  }
`;
