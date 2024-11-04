import Image from "next/image";
import User from '@/app/img/sombra-de-usuario-masculino.png';
import Carro from '@/app/img/hatchback.png';
import Moto from '@/app/img/moto.png';
import Caminhao from '@/app/img/caminhao.png';

export default function Cadastro() {
    return (
        <div>
            <div>
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold underline text-center m-8">Escolha o tipo de cadastro</h1>
            </div>
            <div className="">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <a href="/cadastro/usuario">
                        <div className="bg-indigo-600 rounded-lg p-6 m-6 flex flex-col items-center justify-center w-[60vw] sm:w-[40vw] lg:w-[25vw]">
                            <Image src={User} alt="Usuario" className="w-7/12 m-6 lg:w-5/12"/>
                            <p className="text-white font-semibold text-lg lg:text-2xl">Cadastrar Usuário</p>
                        </div>
                    </a>
                    <a href="/cadastro/carro">
                        <div className="bg-indigo-600 rounded-lg p-6 m-6 flex flex-col items-center justify-center w-[60vw] sm:w-[40vw] lg:w-[25vw]">
                            <Image src={Carro} alt="Carro" className="w-7/12 m-6 lg:w-5/12"/>
                            <p className="text-white font-semibold text-lg lg:text-2xl">Cadastrar Carro</p>
                        </div>
                    </a>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                    <a href="/cadastro/moto">
                        <div className="bg-indigo-600 rounded-lg p-6 m-6 flex flex-col items-center justify-center w-[60vw] sm:w-[40vw] lg:w-[25vw]">
                            <Image src={Moto} alt="Moto" className="w-7/12 m-6 lg:w-5/12"/>
                            <p className="text-white font-semibold text-lg lg:text-2xl">Cadastrar Moto</p>
                        </div>
                    </a>
                    <a href="/cadastro/caminhao">
                        <div className="bg-indigo-600 rounded-lg p-6 m-6 flex flex-col items-center justify-center w-[60vw] sm:w-[40vw] lg:w-[25vw]">
                            <Image src={Caminhao} alt="Caminhao" className="w-7/12 m-6 lg:w-5/12"/>
                            <p className="text-white font-semibold text-lg lg:text-2xl">Cadastrar Caminhão</p>
                        </div>
                    </a>
                </div>
            </div>    
        </div>
    );
}