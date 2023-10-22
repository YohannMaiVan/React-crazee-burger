import { useContext, useState } from "react"
import styled from "styled-components"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
// import HintMessage from "./HintMessage"
import ImagePreview from "./ImagePreview"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"
import OrderContext from "../../../../../../context/OrderContext"
import { getInputTextConfig } from "./inputTextConfig.jsx"

export default function EditForm() {
  const { productSelected } = useContext(OrderContext)
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT) // state interne à EditForm

  const inputTexts = getInputTextConfig(productSelected)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProductBeingEdited({
      ...productBeingEdited,
      [name]: value,
    })
  }

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit"></div>
    </EditFormStyled>
  )
}

const EditFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`
