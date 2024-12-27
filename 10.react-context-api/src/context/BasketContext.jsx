import { createContext, useState } from "react"

export const BasketContext = createContext(null)

const BasketProvider = ({children}) => {

    const [basket, setBasket] = useState([])

  return (
    <BasketContext.Provider value={{basket}}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider