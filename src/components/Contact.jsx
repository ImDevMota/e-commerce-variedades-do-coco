function Contact({ marginTop }) {
  return (
    <section
      id="contact"
      className={`flex flex-row sm:mt-[0rem] sm:h-[22rem] ${
        marginTop === "yes" ? "mt-[17.75rem]" : "mt-0"
      } items-center justify-center bg-green-800 text-white`}
    >
      <div className="w-[80%] sm:h-[18.5rem] flex flex-row flex-wrap justify-between sm:flex sm:flex-col mt-[3.5rem]">
        <div className="justify-self-start h-[6.5rem] sm:justify-normal mb-[2rem]">
          <h3 className="text-[22.4px] sm:text-[21px] font-bold">
            Variedades do Coco
          </h3>
          <p className="text-[17px] sm:text-[16px] mt-[1.5rem] sm:mt-[1rem]">
            Trazendo os melhores produtos derivados do coco até a sua porta{" "}
            <br /> desde 2022.
          </p>
        </div>

        <div className="sm:ml-0">
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
        <hr className="w-full mt-[4.31rem] sm:mt-[0]" />
      </div>
    </section>
  );
}

export default Contact;
