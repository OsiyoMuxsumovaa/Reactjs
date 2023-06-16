import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Company from "./pages/Company";
import MyPage from '../src/components2/container/index'
import MyPagee from '../src/components3/container2/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-pagee" element={<MyPagee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
