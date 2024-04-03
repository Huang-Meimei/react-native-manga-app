import React, { Children, useState } from "react";
import { createContext } from "react"
import { THEME } from "../theme/ThemeDetail";

type ThemeContextType = {
    theme:THEME,
    setTheme:(theme:THEME)=>void;
};


const themeContext = createContext<ThemeContextType|null>(null);

type ThemeContainerProps = {
    children: React.ReactNode;
};

  

export const ThemeProvider: React.FC<ThemeContainerProps> = ({children}) =>{
    const [theme,setTheme] = useState<THEME>(THEME.dark)


    return (
        <themeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </themeContext.Provider>
    )

}


const useTheme= ()=>{
    const {theme, setTheme} = React.useContext(themeContext) as ThemeContextType

    return {
        theme,
        setTheme
    }

}

export default useTheme;