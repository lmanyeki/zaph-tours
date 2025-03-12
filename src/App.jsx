import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Destinations from "./components/Destinations/Destinations";
import Trips from "./components/Trips/Trips";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Nav id="navbar" />
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <FeaturedDestinations />
              <Testimonials />
              <Newsletter />
              <Footer />
            </>
          } />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
