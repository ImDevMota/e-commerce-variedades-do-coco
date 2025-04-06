import Header from "./components/Header";
import Outdoor from "./components/Outdoor";
import Products from "./components/Products";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        const offset = -150; // Ajuste o valor conforme necessário
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition + offset,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <>
      <div className="box-border m-0 p-0 font-sans">
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
