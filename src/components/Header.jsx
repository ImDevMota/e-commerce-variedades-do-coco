import { ShoppingCart } from "lucide-react";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "./ProductsProvider";

function Header() {
  const navigate = useNavigate();

  function onCartClick() {
    navigate(`/cart`);
    window.scrollTo(0, 0);
  }

  const { cartCount } = useContext(ProductsContext);

  return (
    <header className="text-white sm:h-[9rem] w-full h-[11.2rem] flex flex-row z-[1000] justify-center items-center fixed bg-green-800 border-solid border-b-[22px] border-yellow-950">
      <div className="flex justify-center items-center w-[97.95%] h-[80%]">
        <img
          className="absolute left-5 w-[170px] h-[120px] sm:w-[120px] sm:h-[85px] sm:left-[0.5rem] "
          src={Logo}
          alt="Logo da empresa."
        />

        <nav className="text-[20px] sm:text-[11px] sm:hidden">
          <ul className="flex flex-row list-none gap-[2.5rem] sm:gap-[0.5rem]">
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800 "
                href="#"
              >
                Início
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800"
                href="#"
              >
                Produtos
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800"
                href="#"
              >
                Sobre Nós
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800"
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute flex right-12 sm:right-[2rem] items-center space-x-2 text-[20px] sm:text-[10px]">
          <button
            onClick={() => onCartClick()}
            className="flex rounded-2xl w-[55px] h-[55px] sm:w-[35px] sm:h-[35px] self-center items-center justify-center hover:opacity-75 hover:bg-green-600 hover:p-2 sm:hover:p-0 sm:hover:bg-green-800"
          >
            <ShoppingCart size={48} className="" />
          </button>
          <p className="sm:hidden">Cart ({cartCount})</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
