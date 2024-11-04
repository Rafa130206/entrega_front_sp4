"use client";
import { TipoCaminhao } from "@/app/types";
import { useEffect, useState } from "react";

export default function Caminhoes() {
    const [caminhoes, setCaminhoes] = useState<TipoCaminhao[]>([]);
    const [mensagemEnvio, setMensagemEnvio] = useState<string | null>(null);
    const [mensagemErro, setMensagemErro] = useState<string | null>(null);

    const consumindoApiCaminhoes = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/base-caminhoes");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCaminhoes(data);
        } catch (error) {
            console.error("Erro ao buscar caminhoes:", error);
        }
    };

    useEffect(() => {
        consumindoApiCaminhoes();
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
        const capacidadeDoEixo = (document.getElementById("idcapacidadeDoEixo") as HTMLInputElement).value.trim();
        const eixos = (document.getElementById("ideixos") as HTMLInputElement).value.trim();
        const capacidadeDeCarga = (document.getElementById("idcapacidadeDeCarga") as HTMLInputElement).value.trim();
        const pesoTotal = (document.getElementById("idpesoTotal") as HTMLInputElement).value.trim();

        if (!placa || !marca || !modelo || !tipo || !ano || !cor || !capacidadeDoEixo || !eixos || !capacidadeDeCarga || !pesoTotal) {
            setMensagemErro("Preencha todos os campos");
        } else {
            setMensagemEnvio("Dados enviados com sucesso!");
            console.log("Dados enviados com sucesso!");
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center mb-6">
                <h1 className='text-center my-6 pt-2 text-[3vw] md:text-4xl lg:text-5xl font-bold'>Cadastre seu caminhão!</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[25vw] md:w-[300px] lg:w-[440px] bg-gray-200 rounded-lg p-5">
                        <fieldset className="border-none flex flex-col">
                            <legend className="p-4 text-2xl font-bold text-center">Informações do Caminhão</legend>
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
                            '<label className="pt-2 pb-2 block">
                                <input type="number" name='capacidadeDoEixo' id='idcapacidadeDoEixo' placeholder='Insira a capacidade do eixo do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name='eixos' id='ideixos' placeholder='Insira o numero de eixos do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name="capacidadeDeCarga" id="idcapacidadeDeCarga" placeholder='Insira a capacidade de carga do veículo' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="number" name='pesoTotal' id='idpesoTotal' placeholder='Insira o peso total do veículo' className="text-lg w-full p-1 rounded-md border-none" />
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
