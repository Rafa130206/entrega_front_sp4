"use client";
import { TipoUsuario } from "@/app/types";
import { useEffect, useState } from "react";

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState<TipoUsuario[]>([]);
    const [mensagemEnvio, setMensagemEnvio] = useState<string | null>(null);
    const [mensagemErro, setMensagemErro] = useState<string | null>(null);

    const consumindoApiUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/base-usuarios");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    useEffect(() => {
        consumindoApiUsuarios();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        setMensagemEnvio(null);
        setMensagemErro(null);

        const cpf = (document.getElementById("idcpf") as HTMLInputElement).value.trim();
        const nome = (document.getElementById("idnome") as HTMLInputElement).value.trim();
        const rg = (document.getElementById("idrg") as HTMLInputElement).value.trim();
        const cep = (document.getElementById("idcep") as HTMLInputElement).value.trim();

    
        if (!cpf || !nome || !rg || !cep) {
            setMensagemErro("Preencha todos os campos");
        } else {
            setMensagemEnvio("Dados enviados com sucesso!");
            console.log("Dados enviados com sucesso!");
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center mb-6">
                <h1 className='text-center my-6 pt-2 text-[3vw] md:text-4xl lg:text-5xl font-bold'>Cadastre seu usuário!</h1>
                <section className='m-5 w-full flex justify-center'>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[25vw] md:w-[300px] lg:w-[440px] bg-gray-200 rounded-lg p-5">
                        <fieldset className="border-none flex flex-col">
                            <legend className="p-4 text-2xl font-bold text-center">Informações do Usuário</legend>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name="cpf" id="idcpf" placeholder='Insira seu CPF' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='nome' id='idnome' placeholder='Insira seu nome' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='rg' id='idrg' placeholder='Insira seu RG' className="text-lg w-full p-1 rounded-md border-none" />
                            </label>
                            <label className="pt-2 pb-2 block">
                                <input type="text" name='cep' id='idcep' placeholder='Insira seu CEP' className="text-lg w-full p-1 rounded-md border-none" />
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
