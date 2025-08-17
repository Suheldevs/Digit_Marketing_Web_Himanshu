import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; // ✅ Add this line
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import WebDevelopment from "./Pages/WebDevelopment";
import Project from "./Pages/Project";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/web" element={<WebDevelopment />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
