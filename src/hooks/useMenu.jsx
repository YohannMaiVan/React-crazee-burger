import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE)

  // comportements (gestionnaire de state ou "state handlers")

  const handleAdd = (newProduct) => {
    //1. copie du tableau
    const menuCopy = deepClone(menu)
    //2. manip de la COPIE tableau
    const menuUpdated = [newProduct, ...menuCopy]
    //3. update du state
    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    //copie du state
    const menuCopy = deepClone(menu)

    //manipulation de la copie du state
    const menuCopyUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    )

    setMenu(menuCopyUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const menuUpdating = deepClone(menu)

    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    )

    menuUpdating[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    setMenu(menuUpdating)
  }

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM)
  }

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu }
}
