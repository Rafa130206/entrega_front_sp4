import Image from "next/image";
import img1 from "../app/img/img1.png";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold underline text-center m-8">JLR Soluções</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-24 items-center justify-evenly lg:mt-16">
            <Image src={img1} alt="img1" className="w-9/12 md:w-7/12 lg:w-[40vw] xl:w-[30vw] my-16 rounded-xl"/>
            <p className="w-9/12 lg:w-[45vw] xl:w-[30vw] text-center bg-slate-300 p-4 rounded-lg text-lg sm:text-xl md:text-2xl mb-12">O projeto busca criar um sistema que automatize o diagnóstico e a elaboração de orçamentos para a manutenção de veículos, resolvendo a falta de soluções desse tipo no mercado. O sistema permitirá o gerenciamento do cadastro de veículos, tornando os atendimentos mais ágeis e aumentando a satisfação dos clientes. Além de melhorar a organização nas oficinas, o projeto também garante a segurança das informações dos clientes e a capacidade de lidar com muitas solicitações, oferecendo uma experiência mais eficiente e tranquila para todos.</p>
        </div>
      </div>
    </div>
  );
}
