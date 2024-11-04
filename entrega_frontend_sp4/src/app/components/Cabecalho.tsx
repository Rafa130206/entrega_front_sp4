import Image from 'next/image'
import Menu from './Menu'
import Logo from '../img/jlr_soluções.png'

export default function Cabecalho(){
    return(
        <header className='bg-indigo-600 min-h-20 p-5 flex justify-evenly items-center'>
            <div className='flex flex-row justify-center items-center gap-8'>
            <Image src={Logo} alt="Logo" className='w-16 sm:w-20'/>
            <h1 className='text-2xl sm:text-4xl text-white'>JLR Soluções </h1>
            </div>
             <Menu/>
        </header>
    )
}

