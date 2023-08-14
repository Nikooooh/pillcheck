import {BsGithub,BsLinkedin,BsYoutube} from 'react-icons/bs'

function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center h-36">
           <p className='mb-4 text-slate-500 max-w-md text-center sm:max-w-full'>© 2023 Pilulas.com.br - Todos os direitos reservados.</p>
        <div className="flex space-x-5" >
        <a href="https://github.com/Nikooooh" target="_blank" rel="noopener noreferrer">
            <BsGithub className="text-xl" size={40} color='DarkGray'/>
        </a>
        <a href="https://www.linkedin.com/in/nicolastrevisan/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="text-xl"size={40} color='DarkGray' />
        </a>
        <a href="https://www.youtube.com/@NicolasTrevisann" target="_blank" rel="noopener noreferrer">
            <BsYoutube className="text-xl" size={40} color='DarkGray'/>
        </a>
        </div>
    </footer>
    )
}

export default Footer