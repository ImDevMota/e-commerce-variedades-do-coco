import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Outdoor from "./components/Outdoor";
import Products from "./components/Products";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="box-border m-0 p-0 font-sans scroll-pt-[11.2rem]">
        <Header />

        <Outdoor />

        <Products />

        <Info />

        <Contact marginTop="yes" />

        <Footer />
      </div>
    </>
  );
}

export default App;
