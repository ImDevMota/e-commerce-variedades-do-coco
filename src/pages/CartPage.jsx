import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import AguaDeCoco from "../assets/agua-de-coco.png";
import LeiteDeCoco from "../assets/leite-de-coco.png";
import CocoRalado from "../assets/coco-ralado.png";
import CocoVerde from "../assets/coco-verde.png";
import OleoDeCoco from "../assets/oleo-de-coco.png";
import Footer from "../components/Footer";
import Plus from "../assets/mais.png";
import Minus from "../assets/menos.png";
import { TrashIcon } from "lucide-react";
import { ProductsContext } from "../components/ProductsProvider";

function CartPage() {
  const navigate = useNavigate();
  let { products } = useContext(ProductsContext);
  let { totalProducts } = useContext(ProductsContext);
  const { onDeleteProduct } = useContext(ProductsContext);
  const { onIncreaseQuantityProduct } = useContext(ProductsContext);
  const { onDecreaseQuantityProduct } = useContext(ProductsContext);
  console.log(products);

  const srcImg = [];

  products.forEach((product) => {
    if (product.title === "Água de Coco (1L)") {
      srcImg[product.id] = AguaDeCoco;
    } else if (product.title === "Óleo de Coco (1L)") {
      srcImg[product.id] = OleoDeCoco;
    } else if (product.title === "Coco Verde") {
      srcImg[product.id] = CocoVerde;
    } else if (product.title === "Leite de coco (kg)") {
      srcImg[product.id] = LeiteDeCoco;
    } else if (product.title === "Coco Ralado (kg)") {
      srcImg[product.id] = CocoRalado;
    }
  });

  return (
    <>
      <Header page="CartPage" />

      <section className="pt-[11.2rem] sm:pt-[7.5rem] flex justify-center w-full h-[140vh] text-black">
        <div className="inline-flex mt-[4rem] sm:flex sm:flex-col sm:relative">
          <div className="w-[52.3rem] relative flex flex-col mr-[6rem] sm:w-[21.5rem] sm:mr-[0]">
            <div className="inline-flex sm:h-[1.5rem] sm:mb-[2.5rem]">
              <h3 className="text-[26px] text-[#6B7280] ml-[6.6rem] mr-[21.65rem] mb-[4rem] sm:text-[15px] sm:ml-[3rem] sm:mr-[4rem]">
                Produto
              </h3>
              <h3 className="text-[26px] text-[#6B7280] mr-[1.9rem] sm:text-[15px] sm:mr-[1.1rem]">
                Quantidade
              </h3>
              <h3 className="text-[26px] text-[#6B7280] sm:text-[15px]">
                Subtotal
              </h3>
            </div>

            {products.length > 0 ? (
              products.map((product) => (
                <div className="inline-flex mb-[1rem] w-[full]">
                  <div className="w-[99.3%] inline-flex justify-between">
                    <div className="relative sm:w-[8.8rem]">
                      <div className="inline-flex">
                        <img
                          className="w-[5.65rem] h-[5rem] sm:w-[43px] sm:h-[43px]"
                          src={srcImg[product.id]} // passar a imagem no localstorage e verificar reload do localstorage
                          alt=""
                        />
                        <h3 className="ml-4 sm:ml-[0.4rem] mt-[0.7rem] sm:mt-[0.4rem] text-[1.06rem] sm:text-[11px]">
                          {product.title}
                        </h3>
                      </div>
                      <p className="absolute font-bold text-[#15803D] sm:text-[10px] left-[6.6rem] bottom-[1.2rem] sm:left-[3.1rem] sm:bottom-[0.6rem]">
                        {product.price}
                      </p>
                    </div>

                    <div className="flex items-center w-[17rem] sm:w-[10.5rem] justify-between">
                      <div className="inline-flex items-center justify-center w-[6.7rem] sm:w-[5.3rem] mr-[1rem] sm:mr-[0.6rem]">
                        <button
                          onClick={() => onDecreaseQuantityProduct(product.id)}
                        >
                          <img
                            className="w-[17px] h-[17px] sm:w-[13px] sm:h-[13px]"
                            src={Minus}
                            alt=""
                          />
                        </button>

                        <p className="mx-[1rem] sm:text-[11px] sm:mx-[0.7rem]">
                          {product.quantity}
                        </p>

                        <button
                          onClick={() => onIncreaseQuantityProduct(product.id)}
                        >
                          <img
                            className="w-[17px] h-[17px] sm:w-[13px] sm:h-[13px]"
                            src={Plus}
                            alt=""
                          />
                        </button>
                      </div>

                      <div className="inline-flex relative items-center w-[9.2rem] sm:w-[6.5rem] justify-center">
                        <div className="items-center">
                          <p className="font-bold sm:text-[11px]">
                            R${product.subtotal.toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                        <div className="absolute right-[-0.8rem] sm:right-[-0.3rem] bottom-[-0.25rem] items-center">
                          <button onClick={() => onDeleteProduct(product.id)}>
                            <TrashIcon className=" text-red-600 sm:w-[18px] sm:h-[18px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>

          <div className="flex flex-col w-[22.2rem] sm:absolute sm:top-[27.5rem]">
            <h2 className="font-bold text-[20px] mb-[1.5rem]">
              Resumo do Pedido
            </h2>

            <div className="inline-flex items-center justify-between w-full mb-[1rem]">
              <p className="">Subtotal</p>
              <p className="">R${totalProducts.toFixed(2).replace(".", ",")}</p>
            </div>

            <div className="inline-flex items-center justify-between w-full mb-[2rem]">
              <p className="">Frete</p>
              <p>(Consulte o vendedor)</p>
            </div>

            <div className="inline-flex items-center justify-between w-full">
              <p className="font-bold">Total</p>
              <p className="font-bold">
                R${totalProducts.toFixed(2).replace(".", ",")} + Frete
              </p>
            </div>

            <div className="mt-[2rem]">
              <a
                href="#"
                className="w-[22.2rem] h-[2.8rem] flex items-center justify-center text-white mb-[1rem] bg-[#00703C] rounded-md hover:bg-green-900"
              >
                Realizar Pedido
              </a>
              <button
                onClick={() =>
                  navigate("/", { state: { sectionId: "products" } })
                }
                className="w-[22.2rem] h-[2.8rem] flex items-center justify-center border-[1px] text-[#00703C] rounded-md border-[#00703C] mx-auto hover:bg-[#c5c5c5]"
              >
                Continuar Comprando
              </button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default CartPage;
