import Vendas from '../../Imagens/Vendas.png';
import { Link } from 'react-router-dom';

function ExclusivePurchasePage() {
    return (
        <div className="min-h-screen flex justify-center items-center  p-4 sm:p-8 md:p-16">
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-12 max-w-5xl w-full flex flex-col md:flex-row">
                <img src={Vendas} alt="Ilustração de Marketing e Vendas" className="flex-grow w-full md:w-1/2 h-72 md:h-auto object-cover rounded-lg" />

                <div className="flex-grow w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">
                            Exclusividade em Vendas Online
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Deseja que a venda desse produto seja direcionado para sua farmácia Online? Entre em contato conosco.
                        </p>
                        <ul className="mb-6 pl-5 list-disc text-gray-600">
                            <li>Exclusividade nos anúncios</li>
                            <li>Atendimento personalizado</li>
                            <li>Divulgação em massa</li>
                        </ul>
                    </div>

                    <div>
                    <a href="https://www.linkedin.com/in/nicolastrevisan/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-6 py-2 transition-colors duration-300 mb-2 w-full">
                            Entre em Contato
                        </button>
                    </a>
                    <Link to="/videos">
                        <button className="border bg-transparent border-orange-500 text-orange-500 hover:text-orange-600 rounded-md px-6 py-2 transition-colors duration-300 w-full">
                            Saiba Mais
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExclusivePurchasePage;
