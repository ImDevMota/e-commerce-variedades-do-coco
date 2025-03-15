import { InstagramIcon, ZapIcon } from "lucide-react";

function Contact() {
  return (
    <section className="flex flex-row items-center justify-center mt-[17.75rem] bg-green-800 text-white">
      <div className="w-[80%] h-[12rem] grid grid-cols-2 mt-[3.5rem]">
        <div className="justify-self-start">
          <h3 className="text-[22.4px] font-bold">Variedades do Coco</h3>
          <p className="text-[17px] mt-[1.5rem]">
            Trazendo os melhores produtos de coco até a sua porta <br /> desde
            2022.
          </p>
        </div>

        <div className="ml-[20rem]">
          <h3 className="text-[22.4px] font-bold">Entre em Contato:</h3>
          <p className="mt-5 text-[17px]">E-mail: silveiraosmar2@gmail.com</p>
          <p className="mt-4 text-[17px]">Celular: (88) 99609-5309</p>
        </div>
        <hr className="w-[100%] col-span-2 mt-[4.31rem]" />
      </div>
    </section>
  );
}

export default Contact;
