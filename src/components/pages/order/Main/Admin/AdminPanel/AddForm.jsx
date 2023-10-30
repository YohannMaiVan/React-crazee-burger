import { useContext, useState } from "react"
import OrderContext from "../../../../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../../../../enums/product"
import Form from "./Form"

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

  //affichage
  return (
    <Form
      product={newProduct}
      onSubmit={handleOnSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    />
  )
}
