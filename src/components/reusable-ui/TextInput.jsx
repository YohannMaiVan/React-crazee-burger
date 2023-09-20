import styled from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  //state
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
  padding: 18px 24px;
  margin: 18px 0;

  .icon-input {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.P0};
    margin-right: 12px;
  }

  input {
    border: none;
    color: ${theme.colors.dark};
    font-size: 15px;
    width: 100%;

    &::placeholder {
      background-color: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline: none !important;
    }
  }
`;
