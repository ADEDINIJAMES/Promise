import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Services from "../src/Component/Services";
import AboutUs from "../src/Component/about";
import Header from "../src/Component/Header";

// import Blogs from "../src/Component/Blogs";
import ContactUs from "../src/Component/ContactUs";
import Footer from "../src/Component/Footer";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
