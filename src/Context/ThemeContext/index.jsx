import React from "react";
import { useContext } from "react";
import { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState({
    app: {
      height: "100vh",
      backgroundColor: "rgb(255, 255, 255)",
      color: "black",
      transition: "all 1.4s",
    },
    button: {
      colorPrimary: "#1677ff",
      colorTextLightSolid: "white",
      fontSize: 18,
    },
    switch: {
      colorPrimary: "#1677ff",
      colorPrimaryHover: "#4096ff",
      colorWhite: "rgba(255, 255, 255, 1)",
      colorTextQuaternary: "rgba(255, 99, 71, 0.7)",
      colorTextTertiary: "rgba(255, 99, 71, 0.7)",
    },
  });

  const changeTheme = (toggle) => {
    settheme(() =>
      toggle
        ? {
            app: {
              height: "100vh",
              backgroundColor: "rgb(255, 255, 255)",
              color: "black",
              transition: "all 1.4s",
            },
            button: {
              colorPrimary: "#1677ff",
              colorTextLightSolid: "white",
              fontSize: 18,
            },
            switch: {
              colorPrimary: "#1677ff",
              colorPrimaryHover: "#4096ff",
              colorWhite: "rgba(255, 255, 255, 1)",
              colorTextQuaternary: "rgba(255, 89, 71, 0.7)",
              colorTextTertiary: "rgba(255, 89, 71, 0.7)",
            },
          }
        : {
            app: {
              height: "100vh",
              backgroundColor: "rgb(44, 43, 43)",
              color: "white",
              transition: "all 1.4s",
            },
            button: {
              colorPrimary: "rgba(255, 89, 71, 0.7)",
              colorTextLightSolid: "yellow",
              fontSize: 18,
            },
            switch: {
              colorPrimary: "#1677ff",
              colorPrimaryHover: "#4096ff",
              colorWhite: "yellow",
              colorTextQuaternary: "rgba(255, 89, 71, 0.7)",
              colorTextTertiary: "rgba(255, 89, 71, 0.7)",
            },
          },
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export { useTheme };
export default ThemeProvider;
