import { useContext, useState } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import Button from "../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import { getInputTextConfig } from "./inputTextConfig"

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setisSubmitted] = useState(false)

  // comportements

  // gestionnaire d'évenement (state handler)
  const handleOnSubmit = (event) => {
    event.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const displaySuccessMessage = () => {
    setisSubmitted(true)
    setTimeout(() => {
      setisSubmitted(false)
    }, 2000)
  }

  const inputTexts = getInputTextConfig(newProduct)

  //affichage
  return (
    <AddFormStyled onSubmit={handleOnSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />

      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
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
  }
  .submit-button {
    height: 100%;
  }
`
