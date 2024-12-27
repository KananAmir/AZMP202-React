import { createContext, useState } from "react"


export const FavoritesContext = createContext(null)

const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])


    const toggleFavorites = (product)=>{
        const found = favorites.find((p)=>p.id === product.id); 
        if(found){
            setFavorites((prev)=>prev.filter((q)=>q.id !== product.id))
        }else{
            setFavorites((prev)=>[...prev, product ])
        }
    }

    const clearFavorites = () =>{
        setFavorites([])
    }


    console.log(favorites);
    

  return (
    <FavoritesContext.Provider value={{favorites, toggleFavorites, clearFavorites}}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesProvider