function Contact({ marginTop }) {
  return (
    <section
      className={`flex flex-row sm:mt-[0rem] sm:h-[22rem] ${
        marginTop === "yes" ? "mt-[17.75rem]" : "mt-0"
      } items-center justify-center bg-green-800 text-white`}
    >
      <div className="w-[80%] h-[12rem] sm:h-[18.5rem] grid grid-cols-2 sm:flex sm:flex-col mt-[3.5rem]">
        <div className="justify-self-start sm:justify-normal">
          <h3 className="text-[22.4px] sm:text-[21px] font-bold">
            Variedades do Coco
          </h3>
          <p className="text-[17px] sm:text-[16px] mt-[1.5rem] sm:mt-[1rem]">
            Trazendo os melhores produtos derivados do coco até a sua porta{" "}
            <br /> desde 2022.
          </p>
        </div>

        <div className="ml-[20rem] sm:ml-0 sm:justify-self-start sm:mt-[3rem]">
          <h3 className="text-[22.4px] sm:text-[21px] font-bold">
            Entre em Contato:
          </h3>
          <p className="mt-5 text-[17px] sm:text-[16px] sm:mt-[1rem]">
            E-mail: silveiraosmar2@gmail.com
          </p>
          <p className="mt-4 text-[17px] sm:text-[16px] sm:mt-[1rem] sm:mb-[0.4rem]">
            Celular: (88) 99609-5309
          </p>
        </div>
        <hr className="w-[100%] col-span-2 sm:col-span-1 mt-[4.31rem] sm:mt-[1rem] sm:mb-[2rem]" />
      </div>
    </section>
  );
}

export default Contact;
