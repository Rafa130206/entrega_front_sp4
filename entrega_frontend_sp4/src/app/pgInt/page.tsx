import Image from 'next/image';
import Lucas from '../img/lucas.jpeg';
import Joao from '../img/joao.jpg';
import Rafael from '../img/Rafael.jpg';

export default function Integrantes() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold underline text-center m-8">Página de Integrantes</h1>
            <h2 className="text-center mt-6 mb-6 text-2xl">REPOSITÓRIO</h2>
            <div className="text-center mb-6">
                <p>
                    <a href="https://github.com/Rafa130206/entrega_front_sp4" target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline">https://github.com/Rafa130206/entrega_front_sp4</a>
                </p>
            </div>
            <div className="flex flex-row justify-evenly mt-6 mb-20 gap-60">
                <section className="text-center flex flex-col items-center">
                    <Image src={Lucas} alt="Lucas" className="w-[15vw] shadow-lg" />
                    <p className="mt-2 underline text-lg">
                        Nome: Lucas Lerri de Almeida<br />
                        RM: 554635<br />
                        Turma: 1TDSPI<br />
                        <a href="https://github.com/lerri05" className="text-blue-500 no-underline">https://github.com/lerri05</a>
                    </p>
                </section>
                <section className="text-center flex flex-col items-center">
                    <Image src={Joao} alt="Joao" className="w-[15vw] shadow-lg" />
                    <p className="mt-2 underline text-lg">
                        Nome: João Pedro C. Zanni<br />
                        RM: 557591<br />
                        Turma: 1TDSPI<br />
                        <a href="https://github.com/JoaoPedroCZanni" className="text-blue-500 no-underline">https://github.com/JoaoPedroCZanni</a>
                    </p>
                </section>
                <section className="text-center flex flex-col items-center">
                    <Image src={Rafael} alt="Rafael" className="w-[15vw] shadow-lg" />
                    <p className="mt-2 underline text-lg">
                        Nome: Rafael Bompadre Lima<br />
                        RM: 556459<br />
                        Turma: 1TDSPH<br />
                        <a href="https://github.com/Rafa130206" className="text-blue-500 no-underline">https://github.com/Rafa130206</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
