import { ShoppingCart } from "lucide-react";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const { cartCount } = useContext(ProductsContext);

  const navigate = useNavigate();

  function onCartClick() {
    navigate(`/cart`);
    window.scrollTo(0, 0);
  }

  const handleNavigation = (sectionId) => {
    navigate("/", { state: { sectionId } });
  };

  return (
    <header className="sm:h-[9rem] flex z-[1000] w-full h-[11.2rem] justify-center fixed bg-green-800 border-solid border-b-[22px] border-yellow-950">
      <div className="flex flex-row justify-between items-center w-[85%] text-white">
        <img
          className="w-[128px] h-[90px] sm:w-[100px] sm:h-[75px]"
          src={Logo}
          alt="Logo da empresa."
        />

        <nav className="flex flex-row sm:text-[11px] sm:hidden">
          <ul className="flex flex-row list-none text-[20px] gap-[2.5rem]">
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800 "
                href=""
                onClick={() => handleNavigation("home")}
              >
                Início
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800"
                href=""
                onClick={() => handleNavigation("products")}
              >
                Produtos
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800"
                href=""
                onClick={() => handleNavigation("info")}
              >
                Sobre
              </a>
            </li>
            <li className="">
              <a
                className="rounded-2xl hover:opacity-75 hover:bg-green-600 hover:p-4 sm:hover:p-0 sm:hover:bg-green-800"
                href=""
                onClick={() => handleNavigation("contact")}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className=" flex items-center space-x-2 text-[20px] sm:text-[10px]">
          <button
            onClick={() => onCartClick()}
            className="flex rounded-2xl w-[55px] h-[55px] sm:w-[35px] sm:h-[35px] self-center items-center justify-center hover:opacity-75 hover:bg-green-600 hover:p-2 sm:hover:p-0 sm:hover:bg-green-800"
          >
            <ShoppingCart size={48} className="" />
          </button>
          <p className="sm:hidden">Cart ({cartCount})</p>
          <p className="hidden text-lg sm:block">({cartCount})</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
