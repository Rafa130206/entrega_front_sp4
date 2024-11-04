export type TipoUsuario = {
    $cpf: string;
    $nome: string;
    $rg: string;
    $cep: string;
}

export type TipoCarro = {
    $placa: string;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    cor: string;
    cpf: string;
}

export type TipoMoto ={
    $placa: string;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    cor: string;
    cpf: string;
    cilindradas: number;
}

export type TipoCaminhao = {
    $placa: string;
    marca: string;
    modelo: string;
    tipo: string;
    ano: number;
    cor: string;
    cpf: string;
    capacidadeDoEixo: number;
    eixos: number;
    capacidadeDecarga: number;
    pesoTotal: number;
}