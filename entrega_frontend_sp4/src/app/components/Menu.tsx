import Link from "next/link";

export default function Menu(){
    return(
        <nav className="flex">
            <ul className="flex gap-16 links text-white font-semibold text-lg">
                <li className="hover:text-violet-400"><Link href={'/'}>Home</Link></li>
                <li className="hover:text-violet-400"><Link href={'/cadastro'}>Cadastro</Link></li>
                <li className="hover:text-violet-400"><Link href={'/pgInt'}>Página de Integrantes</Link></li>
                <li className="hover:text-violet-400"><Link href={'/contato'}>Contato</Link></li>       
            </ul>
        </nav>
    )
}