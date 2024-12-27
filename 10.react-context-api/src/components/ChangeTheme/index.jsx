import { useContext } from 'react'
import { ThemeContext } from '../../context/TeamContext'

const ChangeTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={()=>toggleTheme()}>{theme === "light" ? "dark mode" : "light mode"}</button>
  )
}

export default ChangeTheme