import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import CountriesScreen from "../screens/CountriesScreen";
import CountryScreen from "../screens/CountryDetailsScreen";


interface ThemeContextProps{
  themeIsDark: boolean;
  setThemeIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext({} as ThemeContextProps);
const { Provider } = ThemeContext;

const AppRouter = () => {

  const [themeIsDark, setThemeIsDark] = useState(false);

  return (
    <div className="App">
      <Provider value={{ themeIsDark, setThemeIsDark}}>
        <BrowserRouter>

            <Header />

            <Routes>
              <Route path="/" element={< CountriesScreen />} />
              <Route path="country/:countryId" element={< CountryScreen />} />
              <Route
                  path="*"
                  element={<Navigate to="/" />}
              />
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default AppRouter;
