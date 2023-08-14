import Logo from '../../Imagens/novaImg.png';
import {Link} from 'react-router-dom';

function Header(){
    return(
    <div className="bg-gray-100 flex justify-center items-center w-full h-40 lg:h-50 xl:h-50 2xl:h-52 p-5 lg:p-8 xl:p-10 2xl:p-12">
         <Link to="/">
            <img className='h-28 w-40 lg:h-36 lg:w-52' src={Logo} alt='Logo do Site'/>
        </Link>
        <menu className='grid grid-rows-3 gap-2 ml-12'>
            <Link to="/sobre" className='text-slate-800 text-lg font-medium rounded lg:text-2xl'>Sobre</Link>
            <h2 className='text-slate-800 text-lg font-medium rounded lg:text-2xl'>Pesquisar</h2>
            <h2 className='text-slate-800 text-lg font-medium rounded lg:text-2xl'>Contato</h2>
        </menu>
    </div>
    )
}

export default Header