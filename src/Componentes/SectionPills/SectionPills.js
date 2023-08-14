import Remedio from '../../Imagens/remedio1.jpg';
import Dipirona from '../../Imagens/dipirona.jpg';
import Doril from '../../Imagens/doril.jpg';
import Benegrip from '../../Imagens/benegrip.jpg';
import Befenol from '../../Imagens/perfenol.jpg';
import Resfenol from '../../Imagens/resfenol.jpg';
import Footer from '../Footer/Footer';

function SectionPills() {
    return(
        <section className="h-2/3 w-full md:mt-0.5 lg:mt-9 xl:mt-9 2xl:mt-0.5 lg:flex justify-between m-auto flex-wrap">
             <div className="product-container w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             <div className="shadow-slate-700 h-80 mb-4 justify-evenly rounded-md p-6 flex flex-col items-center">
                <img src={Remedio} className='mt-4' alt='Foto de uma caixa de remédio'></img>
                 <h4 className='mt-4 text-sm'> Cloridrato de Ondansetrona 8mG </h4>
                 <h3 className='mt-2 text-lg'> R$ 49,90 </h3>
                 <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
             </div>
                 <div className="shadow-slate-700 h-80 mt-14 justify-evenly rounded-md flex flex-col items-center">
                     <img src={Dipirona} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Cloridrato de Dipirona 10 Comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 29,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                <div className="shadow-slate-700 h-80 mb-4 justify-evenly rounded-md flex flex-col items-center">
                    <img src={Doril} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Doril 10 Comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 39,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                  
                <div className="shadow-slate-700 h-80 mb-4 justify-evenly rounded-md flex flex-col items-center">
                    <img src={Resfenol} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Resfenol 20 cápsulas </h4>
                    <h3 className='mt-2 text-lg'> R$ 59,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                
                <div className="shadow-slate-700 h-80 mt-4 mb-4 justify-evenly rounded-md flex flex-col items-center">
                    <img src={Benegrip} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Benegrip cartela 4 comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 19,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                
                <div className="shadow-slate-700 h-80 mt-4 mb-4 justify-evenly rounded-md flex flex-col items-center">
                    <img src={Befenol} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Befenol 8mG 10 Comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 99,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                
                <div className="shadow-slate-700 h-80 mt-4 mb-4 justify-evenly rounded-md flex flex-col items-center">
                    <img src={Befenol} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Befenol 8mG 10 Comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 79,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                
                <div className="shadow-slate-700 h-80 mt-4 mb-4 rounded-md flex flex-col items-center">
                    <img src={Befenol} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Befenol 8mG 10 Comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 59,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                
                <div className="shadow-slate-700 h-80 mt-4 mb-4 justify-evenly rounded-md flex flex-col items-center p-6">
                    <img src={Benegrip} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Benegrip cartela 4 comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 19,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
               
                <div className="shadow-slate-700 h-80 mt-4 mb-4 justify-evenly rounded-md flex flex-col items-center">
                    <img src={Befenol} className='mt-4 h-56 w-56' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Befenol 8mG 10 Comprimidos </h4>
                    <h3 className='mt-2 text-lg'> R$ 99,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>
                
                <div className="shadow-slate-700 h-80 mt-4 mb-4 justify-evenly rounded-md flex flex-col items-center p-6">
                    <img src={Remedio} className='mt-4' alt='Foto de uma caixa de remédio'></img>
                    <h4 className='mt-4 text-sm'> Cloridrato de Ondansetrona 8mG </h4>
                    <h3 className='mt-2 text-lg'> R$ 49,90 </h3>
                    <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'> Comprar </button>
                </div>

            </div>
            <Footer />
            
            
        </section>
        
    )
}

export default SectionPills