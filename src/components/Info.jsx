function Info() {
  return (
    <section id="info" className="flex justify-center items-center">
      <div className="mt-[12rem] w-[80%] flex flex-col justify-center items-center">
        <h2 className="flex justify-center items-center text-4xl text-center sm:text-3xl text-[#964B00] mb-[0.8rem] font-bold">
          Por que escolher nossos Produtos?
        </h2>

        <div className="flex flex-row flex-wrap justify-center sm:flex sm:flex-col gap-y-[8rem] sm:h-[58rem] items-center gap-x-[14rem] text-white mt-32">
          <div className="flex flex-col w-[19rem] h-[9.88rem]">
            <h2 className="text-3xl self-center">🌴</h2>
            <h3 className="self-center text-[#166534] text-[22.4px] font-bold mt-[3rem]">
              De origem sustentável
            </h3>
            <p className="text-[#4B5563] text-center mt-[0.5rem] text-[16px]">
              Nossos cocos são colhidos eticamente de fazendas sustentáveis.
            </p>
          </div>

          <div className="flex flex-col w-[19rem] h-[9.88rem]">
            <h2 className="text-3xl self-center">🥥</h2>
            <h3 className="self-center text-[#166534] text-[22.4px] font-bold mt-[3rem]">
              Qualidade Premium
            </h3>
            <p className="text-[#4B5563] text-center mt-[0.5rem] text-[16px]">
              Selecionamos apenas os melhores cocos para os nossos produtos.
            </p>
          </div>

          <div className="flex flex-col w-[19rem] h-[9.88rem]">
            <h2 className="text-3xl self-center">🌿</h2>
            <h3 className="self-center text-[#166534] text-[22.4px] font-bold mt-[3rem]">
              100% Natural
            </h3>
            <p className="text-[#4B5563] text-center mt-[0.5rem] text-[16px]">
              Sem aditivos ou conservantes, apenas a pura bondade do coco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
