import { NextResponse } from "next/server";

export async function GET() {

    //REcuperando os dados da API JAVA
    try {
        const response = await fetch("http://10.3.76.32:8080/moto");
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Falha na leitura dos dados!", error);
        return NextResponse.json({error:"Não foi possível listar os dados: " + error});
    }
}
