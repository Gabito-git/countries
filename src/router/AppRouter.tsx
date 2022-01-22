import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesScreen from "../screens/CountriesScreen";
import CountryScreen from "../screens/CountryScreen";

const AppRouter = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/" element={< CountriesScreen />} />
            <Route path="country/:countryId" element={< CountryScreen />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
};

export default AppRouter;
