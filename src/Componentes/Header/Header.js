import React from 'react';
import Logo from '../../Imagens/novaImg.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'border-b-3 border-orange-600' : '';
    }

    return (
        <div className="bg-gray-100 shadow-lg font-sans flex justify-center items-center w-full h-40 lg:h-50 xl:h-50 2xl:h-52 p-5 lg:p-8 xl:p-10 2xl:p-12">
            <Link to="/" className="mr-10">
                <img className='h-28 w-40 lg:h-36 lg:w-52' src={Logo} alt='Logo do Site' />
            </Link>
            <menu className='grid grid-rows-3 gap-4 ml-12'>
                <Link 
                    to="/sobre" 
                    className={`text-slate-800 text-lg font-medium rounded lg:text-2xl hover:text-orange-600 transition ${isActive('/sobre')}`}
                >
                    Sobre
                </Link>
                <Link 
                    to="/pesquisa" 
                    className={`text-slate-800 text-lg font-medium rounded lg:text-2xl hover:text-orange-600 transition ${isActive('/pesquisa')}`}
                >
                    Pesquisar
                </Link>
                <Link 
                    to="/contato" 
                    className={`text-slate-800 text-lg font-medium rounded lg:text-2xl hover:text-orange-600 transition ${isActive('/contato')}`}
                >
                    Contato
                </Link>
            </menu>
        </div>
    );
}

export default Header;
