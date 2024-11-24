import { useColorScheme } from "react-native";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const lightTheme = {
  dark: false,
  color: {
    background: "#ffff",
    text: "#0000",
  },
};
const darkTheme = {
  dark: true,
  color: {
    background: "#ffff",
    text: "#0000",
  },
};

const themeContext = createContext({
  theme: darkTheme,
  toogleTheme: () => {},
});

const ThemeContexProvider = ({ children }: { children: ReactNode }) => {
  const systenTheme = useColorScheme();
  const [theme, setTheme] = useState(
    systenTheme === "dark" ? darkTheme : lightTheme
  );

  const toogleTheme = async () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    await AsyncStorage.setItem(
      "userTheme",
      theme === lightTheme ? "light" : "dark"
    );
  };

  useEffect(() => {
    async function loadTheme() {
      const userTheme = await AsyncStorage.getItem("userTheme");
      if (userTheme) {
        setTheme(userTheme === "dark" ? darkTheme : lightTheme);
      }
    }
    loadTheme();
  }, []);

  return (
    <themeContext.Provider
      value={{
        theme,
        toogleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};
export const useThemeContex = () => useContext(themeContext);
export default ThemeContexProvider;
