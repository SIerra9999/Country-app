import React from "react";

type possibleThemes = "light" | "dark";

type contextReturn = {
  theme: possibleThemes;
  setTheme: React.Dispatch<React.SetStateAction<possibleThemes>>;
};

const ThemeContext = React.createContext<contextReturn | undefined>(undefined);

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState<possibleThemes>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme : setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme as contextReturn;
};

export { ThemeContextProvider, useTheme };
