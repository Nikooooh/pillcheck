import Remedio from '../../Imagens/remedio1.jpg';
import Dipirona from '../../Imagens/dipirona.jpg';
import Doril from '../../Imagens/doril.jpg';
import Benegrip from '../../Imagens/benegrip.jpg';
import Befenol from '../../Imagens/perfenol.jpg';
import Resfenol from '../../Imagens/resfenol.jpg';
import Xanax from '../../Imagens/xanax.jpg';
import Sedafit from '../../Imagens/sedatif.jpg';
import Serenata from '../../Imagens/serenata.png';
import Footer from '../Footer/Footer';


const products = [
    {
      image: Remedio,
      name: 'Cloridrato de Ondansetrona 8mG',
      price: 'R$ 49,90',
    },
    {
      image: Dipirona,
      name: 'Cloridrato de Dipirona 10 Comprimidos',
      price: 'R$ 29,90',
    },
    {
        image: Doril,
        name: 'Doril 10 Comprimidos',
        price: 'R$ 19,90',
    },
    {
        image: Befenol,
        name: 'Befenol 30 cápsulas',
        price: 'R$ 59,90',
    },
    {
        image: Resfenol,
        name: 'Resfenol 30 comprimidos',
        price: 'R$ 39,90',
    },
    {
        image: Benegrip,
        name: 'Benegrip com 4 unidades',
        price: 'R$ 9,90',
    },
    {
        image: Xanax,
        name: 'Alprazolam 1mg 30 comprimidos',
        price: 'R$ 89,00',
    },
    {
        image: Serenata,
        name: 'Sertralina 60 comprimidos',
        price: 'R$ 169,90',
    },
    {
        image: Sedafit,
        name: 'Seratif 30 cápsulas',
        price: 'R$ 55,90',
    },
  ];

  function ProductCard({ image, name, price }) {
    return (
      <div className="shadow-slate-700 h-80 mb-4 mt-4 justify-evenly rounded-md p-6 flex flex-col items-center">
        <img src={image} className='mt-4 h-56 w-56' alt={`Foto de ${name}`}></img>
        <h4 className='mt-4 text-sm'>{name}</h4>
        <h3 className='mt-2 text-lg'>{price}</h3>
        <button className='rounded mt-2 p-0.5 px-2 bg-red-500 text-slate-50'>Comprar</button>
      </div>
    );
  }

  function SectionPills() {
    return (
      <section className="h-2/3 w-full md:mt-0.5 lg:mt-9 xl:mt-9 2xl:mt-0.5 lg:flex justify-between m-auto flex-wrap">
        <div className="product-container w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <Footer />
      </section>
    );
  }


export default SectionPills