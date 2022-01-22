import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import CountriesScreen from "../screens/CountriesScreen";
import CountryScreen from "../screens/CountryScreen";

const AppRouter = () => {
  return (
    <div className="App">
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
    </div>
  )
};

export default AppRouter;
