import { createContext, useContext } from "react";

// step1. creating context an its parameter
export const ThemeContext = createContext({
  themeMode : "light",
  darkTheme : () => {},
  lightTheme : () => {},
});

//step 2. make every children section aware that the context is exist
export const ThemeProvider = ThemeContext.Provider;


//step3. let every component to use the store
export default function useTheme(){
  return useContext(ThemeContext);
};