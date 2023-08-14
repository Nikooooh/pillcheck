import Remedio from '../../Imagens/remedio1.jpg';
import Dipirona from '../../Imagens/dipirona.jpg';
import Doril from '../../Imagens/doril.jpg';
import Benegrip from '../../Imagens/benegrip.jpg';
import Befenol from '../../Imagens/perfenol.jpg';
import Resfenol from '../../Imagens/resfenol.jpg';

function SectionPills() {
    return(
        <section className=" overflow-y-auto  h-2/3 w-full md:mt-0.5 lg:mt-9 xl:mt-9 2xl:mt-0.5" >
            <div className=" shadow-slate-700 w-72 h-80 ml-14 mb-4 justify-evenly rounded-md ">
                <img src={Remedio} className='ml-8 mt-4 'alt='Foto de uma caixa de remédio'></img>
                <h4 className='ml-4 text-sm'> Cloridrato de Ondansetrona 8mG 10 Comprimidos </h4>
                <h3 className='ml-28 text-lg'> R$ 49,90 </h3>
                <button className='rounded  ml-28 mb-2 p-0.5 px-1.5 bg-red-500 text-slate-50'> Comprar </button>
            </div>
            <div className=" shadow-slate-700 w-72 h-80 ml-14 mt-14 justify-evenly rounded-md ">
                <img src={Dipirona} className='ml-8 mt-4 h-56 w-56'alt='Foto de uma caixa de remédio'></img>
                <h4 className='ml-6 text-sm'> Cloridrato de Dipirona 10 Comprimidos </h4>
                <h3 className='ml-28 text-lg'> R$ 29,90 </h3>
                <button className='rounded  ml-28 mb-2 p-0.5 px-1.5 bg-red-500 text-slate-50'> Comprar </button>
            </div>
            <div className=" shadow-slate-700 w-72 h-80 ml-14 mb-4 justify-evenly rounded-md ">
                <img src={Doril} className='ml-8 mt-4 h-56 w-56'alt='Foto de uma caixa de remédio'></img>
                <h4 className='ml-20 text-sm'> Doril 10 Comprimidos </h4>
                <h3 className='ml-28 text-lg'> R$ 39,90 </h3>
                <button className='rounded  ml-28 mb-2 p-0.5 px-1.5 bg-red-500 text-slate-50'> Comprar </button>
            </div>
            <div className=" shadow-slate-700 w-72 h-80 ml-14 mb-4 justify-evenly rounded-md ">
                <img src={Resfenol} className='ml-8 mt-4 h-56 w-56'alt='Foto de uma caixa de remédio'></img>
                <h4 className='ml-20 text-sm'> Resfenol 20 cápsulas </h4>
                <h3 className='ml-28 text-lg'> R$ 59,90 </h3>
                <button className='rounded  ml-28 mb-2 p-0.5 px-1.5 bg-red-500 text-slate-50'> Comprar </button>
            </div>
            <div className=" shadow-slate-700 w-72 h-80 ml-14 mt-14 justify-evenly rounded-md ">
                <img src={Benegrip} className='ml-8 mt-4 h-56 w-56'alt='Foto de uma caixa de remédio'></img>
                <h4 className='ml-14 text-sm'> Benegrip cartela 4 comprimidos </h4>
                <h3 className='ml-28 text-lg'> R$ 19,90 </h3>
                <button className='rounded  ml-28 mb-2 p-0.5 px-1.5 bg-red-500 text-slate-50'> Comprar </button>
            </div>
            <div className=" shadow-slate-700 w-72 h-80 ml-14 mb-4 rounded-md ">
                <img src={Befenol} className='ml-8 mt-4 h-56 w-56'alt='Foto de uma caixa de remédio'></img>
                <h4 className='ml-16 text-sm'> Befenol 8mG 10 Comprimidos </h4>
                <h3 className='ml-28 text-lg'> R$ 79,90 </h3>
                <button className='rounded  ml-28 mb-2 p-0.5 px-1.5 bg-red-500 text-slate-50'> Comprar </button>
            </div>
        </section>
    )
}

export default SectionPills