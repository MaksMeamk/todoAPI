import React from "react";
import { useContext } from "react";
import { useState } from "react";

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {
    const [theme, settheme] = useState('light')

    const changeTheme = (toggle) => {

        settheme(() => toggle ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const theme = useContext(ThemeContext)
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return theme;
}

export { useTheme };
export default ThemeProvider;