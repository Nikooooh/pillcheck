import Logo from '../../Imagens/novaImg.png';

function Header(){
    return(
    <div className=" justify-center flex w-full h-40 lg:h-50 xl:h-50 2xl:h-52">
        <img className='ml-5 mt-5 h-28 w-40 lg:h-40 lg:w-52 lg:mt-4' src={Logo} alt='Logo do Site'></img>
        <menu className=' p-8 table-column mt-0.5 ml-5 lg:ml-10 lg:p-10 lg:mt-1 xl:mt-1 2xl:mt-2'>
            <h2 className='mb-1 text-slate-800 text-xl font-sans font-medium hover:bg-sky-200 rounded lg:text-3xl'> Sobre </h2>
            <h2 className=' mb-1 text-slate-800 text-xl font-sans font-medium hover:bg-sky-200 rounded lg:text-3xl'> Pesquisar </h2>
            <h2 className=' mb-1 text-slate-800 text-xl font-sans font-medium hover:bg-sky-200 rounded lg:text-3xl'> Contato </h2>
        </menu>
    </div>
    )
}

export default Header