import { ChevronLeft, ChevronRight } from "lucide-react";
import bigImage from "../assets/imagem-grande.jpg";

function Outdoor() {
  return (
    <section className="text-white pt-[11.2rem]">
      <div className="flex justify-center items-center">
        <img
          className="flex w-[100%] h-[766px] brightness-50"
          src={bigImage}
          alt="Grande imagem de produto."
        />

        <button className="w-16 left-0 absolute">
          <ChevronLeft size={60} />
        </button>

        <button className="w-16 right-0 absolute">
          <ChevronRight size={60} />
        </button>

        <div className="absolute flex flex-col">
          <h1 className="text-6xl font-bold">Variedades do Coco</h1>
          <p className="text-xl self-center">
            Produtos derivados do Coco da melhor qualidade
          </p>
        </div>
      </div>
    </section>
  );
}

export default Outdoor;
