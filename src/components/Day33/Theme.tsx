import React, {createContext} from "react";

export interface ThemeContextType {
    theme:boolean, 
    setTheme: (theme:boolean) => void
}

const intialState: ThemeContextType = {
    theme: false,
    setTheme:(theme:boolean) => {}
}

const ThemeContext = createContext<ThemeContextType>(intialState);

export default ThemeContext;