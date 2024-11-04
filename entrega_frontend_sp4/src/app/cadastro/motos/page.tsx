"use client";
import { TipoMoto } from "@/app/types";
import { useEffect, useState } from "react";

export default function Motos() {
    const [motos, setMotos] = useState<TipoMoto[]>([]);
    const [mensagemEnvio, setMensagemEnvio] = useState<string | null>(null);
    const [mensagemErro, setMensagemErro] = useState<string | null>(null);

    const consumindoApiMotos = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/base-motos");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMotos(data);
        } catch (error) {
            console.error("Erro ao buscar motos:", error);
        }
    };

    useEffect(() => {
        consumindoApiMotos();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMensagemEnvio(null);
        setMensagemErro(null);

        const placa = (document.getElementById("idplaca") as HTMLInputElement).value.trim();
        const marca = (document.getElementById("idmarca") as HTMLInputElement).value.trim();
        const modelo = (document.getElementById("idmodelo") as HTMLInputElement).value.trim();
        const tipo = (document.getElementById("idtipo") as HTMLInputElement).value.trim();
        const ano = (document.getElementById("idano") as HTMLInputElement).value.trim();
        const cor = (document.getElementById("idcor") as HTMLInputElement).value.trim();
        const cilindradas = (document.getElementById("idcilindradas") as HTMLInputElement).value.trim();

        if (!placa || !marca || !modelo || !tipo || !ano || !cor || !cilindradas) {
            setMensagemErro("Preencha todos os campos");
        } else {
            setMensagemEnvio("Dados enviados com sucesso!");
            console.log("Dados enviados com sucesso!");
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center mb-6">
                <h1 className='text-center my-6 pt-2 text-[3vw] md:text-4xl lg:text-5xl font-bold'>Cadastre sua moto!</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[25vw] md:w-[300px] lg:w-[440px] bg-gray-200 rounded-lg p-5">
                        <fieldset className="border-none flex flex-col">
                            <legend className="p-4 text-2xl font-bold text-center">Informações da Moto</legend>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name="placa" id="idplaca" placeholder='Insira a placa do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='marca' id='idmarca' placeholder='Insira a marca do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='mdoelo' id='idmodelo' placeholder='Insira o modelo do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='tipo' id='idtipo' placeholder='Insira o tipo do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name='ano' id='idano' placeholder='Insira o ano do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='cor' id='idcor' placeholder='Insira a cor do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name='cilindradas' id='idcilindradas' placeholder='Insira a quantidade de cilindradas do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                        </fieldset>
                        <button type='submit' className="mt-4 mb-6 text-xl p-2 rounded-lg bg-gray-400 hover:bg-gray-600 text-white cursor-pointer">Enviar</button>
                    </form>
                </section>
                {mensagemErro && <p className="text-red-600 font-semibold">{mensagemErro}</p>}
                {mensagemEnvio && <p className="text-green-600 font-semibold">{mensagemEnvio}</p>}
            </div>
        </div>
    );
}
