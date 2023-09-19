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
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon-input {
    color: ${theme.colors.greyLight};
    font-size: 15px;
    margin-right: 12px;
  }

  input {
    border: none;
    color: "#17161a";
    font-size: 15px;
    width: 100%;

    &::placeholder {
      background-color: #ffffff;
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline: none !important;
    }
  }
`;
