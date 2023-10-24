import { useContext } from "react"
import styled from "styled-components"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import ImagePreview from "./ImagePreview"
import OrderContext from "../../../../../../context/OrderContext"
import { getInputTextConfig } from "./inputTextConfig.jsx"

export default function EditForm() {
  //state

  const { productSelected, setProductSelected, handleEdit } =
    useContext(OrderContext)

  const inputTexts = getInputTextConfig(productSelected)

  // comportements (gestionnaires d'événement ou "event handlers")

  const handleChange = (event) => {
    const { name, value } = event.target

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    }

    //update the form
    setProductSelected(productBeingUpdated)

    //state handler du menu it updates menu
    handleEdit(productBeingUpdated)
  }

  //affichage

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
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
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
