import { useNavigate, useSearchParams } from "react-router-dom";
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

function CartPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="pt-[179px] flex justify-center w-full h-screen text-black">
        <div className="inline-flex mt-[4rem]">
          <div className="w-[52.3rem] relative flex flex-col mr-[6rem]">
            <div className="inline-flex">
              <h3 className="text-[20px] text-[#6B7280] ml-[6.6rem] mr-[24.9rem] mb-[4rem]">
                Produto
              </h3>
              <h3 className="text-[20px] text-[#6B7280] mr-[1.9rem]">
                Quantidade
              </h3>
              <h3 className="text-[20px] text-[#6B7280]">Subtotal</h3>
            </div>

            <div className="inline-flex mb-[1rem]">
              <div className="w-[99.3%] inline-flex justify-between">
                <div className="relative">
                  <div className="inline-flex">
                    <img
                      className="w-[90px] h-[80px]"
                      src={AguaDeCoco}
                      alt=""
                    />
                    <h3 className="ml-4 mt-[1rem] text-[17px]">Água de Coco</h3>
                  </div>
                  <p className="absolute font-bold text-[#15803D] left-[6.6rem] bottom-[1.1rem]">
                    R$10,00
                  </p>
                </div>

                <div className="flex items-center w-[15rem] justify-between">
                  <div className="inline-flex items-center w-[4.7rem] mr-[3rem]">
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Minus} alt="" />
                    </a>
                    <p className="mx-[1rem]">1</p>
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Plus} alt="" />
                    </a>
                  </div>

                  <div className="inline-flex items-center">
                    <p className="font-bold">R$10,00</p>
                    <button>
                      <TrashIcon className="ml-[2rem] text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex mb-[1rem]">
              <div className="inline-flex w-[99.3%] justify-between">
                <div className="relative">
                  <div className="inline-flex">
                    <img
                      className="w-[90px] h-[80px]"
                      src={LeiteDeCoco}
                      alt=""
                    />
                    <h3 className="ml-4 mt-[1rem] text-[17px]">
                      Leite de Coco
                    </h3>
                  </div>
                  <p className="absolute font-bold text-[#15803D] left-[6.6rem] bottom-[1.1rem]">
                    R$12,00
                  </p>
                </div>

                <div className="flex items-center w-[15rem] justify-between">
                  <div className="inline-flex items-center w-[4.7rem] mr-[3rem]">
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Minus} alt="" />
                    </a>
                    <p className="mx-[1rem]">1</p>
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Plus} alt="" />
                    </a>
                  </div>

                  <div className="inline-flex items-center">
                    <p className="font-bold">R$12,00</p>
                    <button>
                      <TrashIcon className="ml-[2rem] text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex mb-[1rem]">
              <div className="inline-flex w-[99.3%] justify-between">
                <div className="relative">
                  <div className="inline-flex">
                    <img
                      className="w-[90px] h-[80px]"
                      src={CocoRalado}
                      alt=""
                    />
                    <h3 className="ml-4 mt-[1rem] text-[17px]">Coco Ralado</h3>
                  </div>
                  <p className="absolute font-bold text-[#15803D] left-[6.6rem] bottom-[1.1rem]">
                    R$12,00
                  </p>
                </div>

                <div className="flex items-center w-[15rem] justify-between">
                  <div className="inline-flex items-center w-[4.7rem] mr-[3rem]">
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Minus} alt="" />
                    </a>
                    <p className="mx-[1rem]">1</p>
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Plus} alt="" />
                    </a>
                  </div>

                  <div className="inline-flex items-center">
                    <p className="font-bold">R$12,00</p>
                    <button>
                      <TrashIcon className="ml-[2rem] text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex mb-[1rem]">
              <div className="inline-flex w-[99.3%] justify-between">
                <div className="relative">
                  <div className="inline-flex">
                    <img className="w-[90px] h-[80px]" src={CocoVerde} alt="" />
                    <h3 className="ml-4 mt-[1rem] text-[17px]">Coco Verde</h3>
                  </div>
                  <p className="absolute font-bold text-[#15803D] left-[6.6rem] bottom-[1.1rem]">
                    R$1,60
                  </p>
                </div>

                <div className="flex items-center w-[15rem] justify-between">
                  <div className="inline-flex items-center w-[4.7rem] mr-[3rem]">
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Minus} alt="" />
                    </a>
                    <p className="mx-[1rem]">1</p>
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Plus} alt="" />
                    </a>
                  </div>

                  <div className="inline-flex items-center">
                    <p className="font-bold">R$1,60</p>
                    <button>
                      <TrashIcon className="ml-[2rem] text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex">
              <div className="inline-flex w-[99.3%] justify-between">
                <div className="relative">
                  <div className="inline-flex">
                    <img
                      className="w-[90px] h-[80px]"
                      src={OleoDeCoco}
                      alt=""
                    />
                    <h3 className="ml-4 mt-[1rem] text-[17px]">Óleo de Coco</h3>
                  </div>
                  <p className="absolute font-bold text-[#15803D] left-[6.6rem] bottom-[1.1rem]">
                    R$85,00
                  </p>
                </div>

                <div className="flex items-center w-[15rem] justify-between">
                  <div className="inline-flex items-center w-[4.7rem] mr-[3rem]">
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Minus} alt="" />
                    </a>
                    <p className="mx-[1rem]">1</p>
                    <a href="">
                      <img className="w-[17px] h-[17px]" src={Plus} alt="" />
                    </a>
                  </div>

                  <div className="inline-flex items-center">
                    <p className="font-bold">R$85,00</p>
                    <button>
                      <TrashIcon className="ml-[2rem] text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[22.2rem]">
            <h2 className="font-bold text-[20px] mb-[1.5rem]">
              Resumo do Pedido
            </h2>

            <div className="inline-flex items-center justify-between w-full mb-[1rem]">
              <p className="">Subtotal</p>
              <p className="">R$120,60</p>
            </div>

            <div className="inline-flex items-center justify-between w-full mb-[2rem]">
              <p className="">Frete</p>
              <p>R$4,00</p>
            </div>

            <div className="inline-flex items-center justify-between w-full">
              <p className="font-bold">Total</p>
              <p className="font-bold">R$124,60</p>
            </div>

            <div className="mt-[2rem]">
              <a
                href="#"
                className="w-[22.2rem] h-[2.8rem] flex items-center justify-center text-white mb-[1rem] bg-[#00703C] rounded-md hover:bg-green-900"
              >
                Realizar Pedido
              </a>
              <button
                onClick={() => navigate(-1)}
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
