import { useContext } from "react";
import ThemeContext from "./Theme";
import { ThemeContextType } from "./Theme";

const ThemeToggle = () => {
    const {theme , setTheme} = useContext<ThemeContextType>(ThemeContext);
    return(
        <button style={{borderRadius: "10px", border:"2px solid black"}}
          className = {theme ? "theme-toggle dark" : "theme-toggle"} onClick = { () => {
            setTheme(!theme)
        }}>
            {theme ? "Dark" : "Light"}
        </button>
    )
} 

export default ThemeToggle;
  