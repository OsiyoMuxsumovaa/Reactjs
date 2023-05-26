import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Company from "./pages/Company";
import MainContent from "./components/MainContent";
import MainBrend from './components/MainBrendContent';
import MainServices from "./components/MainSevices";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
