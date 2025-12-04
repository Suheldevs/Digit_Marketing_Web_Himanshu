import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import WebDevelopment from "./Pages/WebDevelopment";
import Project from "./Pages/Project";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Services from "./Pages/Services";

// Service Detail Pages
import WebDevelopmentDetail from "./Pages/ServiceDetails/WebDevelopment";
import AppDevelopment from "./Pages/ServiceDetails/AppDevelopment";
import DigitalMarketing from "./Pages/ServiceDetails/DigitalMarketing";
import SEO from "./Pages/ServiceDetails/SEO";
import GraphicDesign from "./Pages/ServiceDetails/GraphicDesign";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/web-development" element={<WebDevelopmentDetail />} />
        <Route path="/service/app-development" element={<AppDevelopment />} />
        <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/service/seo" element={<SEO />} />
        <Route path="/service/graphic-design" element={<GraphicDesign />} />
        <Route path="/web" element={<WebDevelopment />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
