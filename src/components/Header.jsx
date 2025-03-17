import { ShoppingCart } from "lucide-react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function onCartClick() {
    navigate(`/cart`);
    window.scrollTo(0, 0);
  }

  return (
    <header className="text-white w-full h-[11.2rem] flex flex-row z-[1000] justify-center items-center fixed bg-green-800 border-solid border-b-[22px] border-yellow-950">
      <div className="flex justify-center items-center w-[97.95%] h-[80%]">
        <img
          className="absolute left-5 w-[170px] h-[120px]"
          src={Logo}
          alt="Logo da empresa."
        />

        <nav className="text-[20px]">
          <ul className="flex flex-row list-none gap-[2.5rem]">
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4"
                href="#"
              >
                Início
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4"
                href="#"
              >
                Produtos
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4"
                href="#"
              >
                Sobre Nós
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4"
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute flex right-12 items-center space-x-2 text-[20px]">
          <button
            onClick={() => onCartClick()}
            className="flex rounded-2xl w-[55px] h-[55px] self-center items-center justify-center hover:opacity-75 hover:bg-green-600 hover:p-2"
          >
            <ShoppingCart size={48} className="" />
          </button>
          <p className="">Cart (0)</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
