import { useState } from "react"

export const useSuccessMessage = (timeDelay = 2000) => {
  //state
  const [isSubmitted, setisSubmitted] = useState(false)

  // comportements

  const displaySuccessMessage = () => {
    setisSubmitted(true)
    setTimeout(() => {
      setisSubmitted(false)
    }, timeDelay)
  }

  return { isSubmitted, displaySuccessMessage }
}
