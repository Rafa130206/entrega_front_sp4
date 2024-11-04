import Link from "next/link";

export default function Menu(){
    return(
        <nav className="flex">
            <ul className="flex gap-6 links">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/cadastro'}>Cadastro</Link></li>
                <li><Link href={'/pgInt'}>Página de Integrantes</Link></li>
                <li><Link href={'/contato'}>Contato</Link></li>       
            </ul>
        </nav>
    )
}