import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

//create custom hook for UserContext 
export default function useTheme() {
    return useContext(ThemeContext)
}