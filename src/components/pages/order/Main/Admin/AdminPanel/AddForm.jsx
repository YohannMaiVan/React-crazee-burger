import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"

const newProduct = {
  id: new Date().getTime(),
  title: "Nouveau produit",
  imageSource:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
  price: 2.5,
}

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext)

  // comportements
  // gestionnaire d'évenement (state handler)
  const handleOnSubmit = (event) => {
    event.preventDefault()
    handleAdd(newProduct)
  }

  return (
    <AddFormStyled onSubmit={handleOnSubmit}>
      <div className="image-preview">imagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
      </div>
      <button className="submit-button">submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4 / -2 / -1 / -1;

    width: 50%;
  }
`
