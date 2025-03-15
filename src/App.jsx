import { useEffect, useState } from "react";
import Header from "./components/Header";
import Outdoor from "./components/Outdoor";
import Button from "./components/Button";
import Products from "./components/Products";
import Info from "./components/Info";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="box-border m-0 p-0 font-sans">
      <Header />

      <Outdoor />

      <Products />

      <Info />

      <Contact />

      <footer className="flex py-[2rem] w-full text-center justify-center bg-green-800">
        <p className="text-white text-[17px]">
          © 2025 @ImDevMota. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
