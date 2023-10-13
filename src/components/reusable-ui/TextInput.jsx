import styled from "styled-components"
import { theme } from "../../theme/index"

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  //affichage
  return (
    <InputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: ${theme.fonts.size.P1} ${theme.fonts.size.P3};

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.greySemiDark};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
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
`
