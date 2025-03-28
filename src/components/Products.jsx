import AguaDeCoco from "../assets/agua-de-coco.png";
import LeiteDeCoco from "../assets/leite-de-coco.png";
import CocoRalado from "../assets/coco-ralado.png";
import CocoVerde from "../assets/coco-verde.png";
import OleoDeCoco from "../assets/oleo-de-coco.png";
import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

function Products() {
  const { onAddProduct } = useContext(ProductsContext);

  return (
    <section
      id="products"
      className="flex flex-row justify-center items-center"
    >
      <div className="w-[76.65%] flex flex-col justify-center items-center">
        <div className="mt-[4rem]">
          <h2 className="flex justify-center items-center text-4xl text-[#964B00] mb-[1rem] font-bold sm:text-3xl">
            Nossos Produtos
          </h2>
          <p className="text-[#4B5563] mb-[50px] sm:text-[13px] sm:text-center">
            Descubra nossa seleção de produtos de coco premium, cuidadosamente
            selecionados para garantir qualidade e sabor.
          </p>
        </div>

        <div className="grid grid-cols-3 text-white gap-x-[8rem] gap-y-[3rem] sm:flex sm:flex-col">
          <div className="flex flex-col w-[25rem] h-[28.6rem] sm:w-[22rem] sm:mx-auto p-4 bg-slate-300/40 rounded-lg shadow-xl shadow-gray-700/30 border border-gray-300 outline outline-1 outline-gray-200">
            <img
              className="w-96 h-64"
              src={AguaDeCoco}
              alt="Copo de água de coco."
            />

            <div className="inline-flex items-center">
              <h3
                id="aguaDeCoco"
                className="text-[#166534] text-[20px] font-bold mt-[0.8rem]"
              >
                Água de Coco (1L)
              </h3>
              <p
                id="priceAguaDeCoco"
                className="text-[#166534] ml-auto font-bold mt-[0.8rem]"
              >
                R$10,00
              </p>
            </div>

            <p className="text-[#4B5563] text-[15.6px] mt-[0.5rem]">
              Água de coco natural refrescante, perfeita para hidratação.
            </p>
            <button
              onClick={() =>
                onAddProduct(
                  document.getElementById("aguaDeCoco").innerText,
                  document.getElementById("priceAguaDeCoco").innerText
                )
              }
              className="hover:bg-green-700 flex rounded-[7px] self-center items-center justify-center w-[23rem] sm:w-[20rem] h-[3rem] bg-[#16A34A] mt-[1.4rem]"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          <div className="flex flex-col w-[25rem] h-[28.6rem] sm:w-[22rem] sm:mx-auto p-4 bg-slate-300/40 rounded-lg shadow-xl shadow-gray-700/30 border border-gray-300 outline outline-1 outline-gray-200">
            <img
              className="w-96 h-64"
              src={OleoDeCoco}
              alt="Jarra com óleo de coco."
            />

            <div className="inline-flex items-center">
              <h3
                id="oleoDeCoco"
                className="text-[#166534] text-[20px] font-bold mt-[0.8rem]"
              >
                Óleo de Coco (1L)
              </h3>
              <p
                id="priceOleoDeCoco"
                className="text-[#166534] ml-auto font-bold mt-[0.8rem]"
              >
                R$85,00
              </p>
            </div>

            <p className="text-[#4B5563] text-[15.6px] mt-[0.5rem]">
              Uma opção mais saudável e com diversas funcionalidades.
            </p>
            <button
              onClick={() =>
                onAddProduct(
                  document.getElementById("oleoDeCoco").innerText,
                  document.getElementById("priceOleoDeCoco").innerText
                )
              }
              className="hover:bg-green-700 flex rounded-[7px] self-center items-center justify-center w-[23rem] sm:w-[20rem] h-[3rem] bg-[#16A34A] mt-[1.4rem]"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          <div className=" flex flex-col w-[25rem] h-[28.6rem] sm:w-[22rem] sm:mx-auto p-4 bg-slate-300/40 rounded-lg shadow-xl shadow-gray-700/30 border border-gray-300 outline outline-1 outline-gray-200">
            <img className="w-96 h-64" src={CocoVerde} alt="Coco verde." />

            <div className="inline-flex items-center">
              <h3
                id="cocoVerde"
                className="text-[#166534] text-[20px] font-bold mt-[0.8rem]"
              >
                Coco Verde
              </h3>
              <p
                id="priceCocoVerde"
                className="text-[#166534] ml-auto font-bold mt-[0.8rem]"
              >
                R$1,60
              </p>
            </div>

            <p className="text-[#4B5563] text-[15.6px] mt-[0.5rem]">
              Cocos verdes frescos, prontos para beber e aproveitar.
            </p>
            <button
              onClick={() =>
                onAddProduct(
                  document.getElementById("cocoVerde").innerText,
                  document.getElementById("priceCocoVerde").innerText
                )
              }
              className="hover:bg-green-700 flex rounded-[7px] self-center items-center justify-center w-[23rem] sm:w-[20rem] h-[3rem] bg-[#16A34A] mt-[1.4rem]"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          <div className=" flex flex-col w-[25rem] h-[28.6rem] sm:w-[22rem] sm:mx-auto p-4 bg-slate-300/40 rounded-lg shadow-xl shadow-gray-700/30 border border-gray-300 outline outline-1 outline-gray-200">
            <img
              className="w-96 h-64"
              src={LeiteDeCoco}
              alt="Jarra de leite de coco."
            />

            <div className="inline-flex items-center">
              <h3
                id="leiteDeCoco"
                className="text-[#166534] text-[20px] font-bold mt-[0.8rem]"
              >
                Leite de coco (kg)
              </h3>
              <p
                id="priceLeiteDeCoco"
                className="text-[#166534] ml-auto font-bold mt-[0.8rem]"
              >
                R$12,00
              </p>
            </div>

            <p className="text-[#4B5563] text-[15.6px] mt-[0.5rem]">
              Cremoso, perfeito para cozinhar e fazer vitaminas.
            </p>
            <button
              onClick={() =>
                onAddProduct(
                  document.getElementById("leiteDeCoco").innerText,
                  document.getElementById("priceLeiteDeCoco").innerText
                )
              }
              className="hover:bg-green-700 flex rounded-[7px] self-center items-center justify-center w-[23rem] sm:w-[20rem] h-[3rem] bg-[#16A34A] mt-[1.4rem]"
            >
              Adicionar ao Carrinho
            </button>
          </div>

          <div className=" flex flex-col w-[25rem] h-[28.6rem] sm:w-[22rem] sm:mx-auto p-4 bg-slate-300/40 rounded-lg shadow-xl shadow-gray-700/30 border border-gray-300 outline outline-1 outline-gray-200">
            <img
              className="w-96 h-64"
              src={CocoRalado}
              alt="Tijela com coco ralado."
            />

            <div className="inline-flex items-center">
              <h3
                id="cocoRalado"
                className="text-[#166534] text-[20px] font-bold mt-[0.8rem]"
              >
                Coco Ralado (kg)
              </h3>
              <p
                id="priceCocoRalado"
                className="text-[#166534] ml-auto font-bold mt-[0.8rem]"
              >
                R$12,00
              </p>
            </div>

            <p className="text-[#4B5563] text-[15.6px] mt-[0.5rem]">
              Perfeito para o uso culinário.
            </p>
            <button
              onClick={() =>
                onAddProduct(
                  document.getElementById("cocoRalado").innerText,
                  document.getElementById("priceCocoRalado").innerText
                )
              }
              className="hover:bg-green-700 flex rounded-[7px] self-center items-center justify-center w-[23rem] sm:w-[20rem] h-[3rem] bg-[#16A34A] mt-[1.4rem]"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
