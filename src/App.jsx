import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Outdoor from "./components/Outdoor";
import Products from "./components/Products";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
