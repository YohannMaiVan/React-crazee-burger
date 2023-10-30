import { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext"
import EditInfoMessage from "./EditInfoMessage.jsx"
import Form from "./Form"

export default function EditForm() {
  //state

  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext)

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
    <Form
      product={productSelected}
      onChange={handleChange}
      ref={titleEditRef}
      QUELQUECHOSE={<EditInfoMessage />}
    />
  )
}
