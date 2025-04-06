import bigImage from "../assets/imagem-grande.jpg";

function Outdoor() {
  return (
    <section id="home" className=" pt-[11.2rem] sm:pt-[9rem]">
      <div className="flex justify-center items-center text-white">
        <img
          className="flex w-[100%] h-[766px] brightness-50 sm:h-[20rem]"
          src={bigImage}
          alt="Grande imagem de produto."
        />

        <div className="absolute flex flex-col">
          <h1 className="text-6xl font-bold text-center sm:text-3xl">
            Variedades do Coco
          </h1>
          <p className="text-xl self-center text-center sm:text-xs">
            Produtos derivados do Coco da melhor qualidade
          </p>
        </div>
      </div>
    </section>
  );
}

export default Outdoor;
