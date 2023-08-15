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
import { Link } from 'react-router-dom';


export const products = [
    {
      image: Remedio,
      name: 'Cloridrato de Ondansetrona 8mG',
      price: 'R$ 49,90',
      description:'Para que serve Cloridrato de Ondansetrona? Adultos: O cloridrato de ondansetrona é indicado para o controle de náuseas e vômitos induzidos por quimioterapia e radioterapia. Também é indicado para prevenção de náuseas e vômitos do período pós-operatório.',
      slug: 'cloridrato-de-ondansetrona-8mg',
    },
    {
      image: Dipirona,
      name: 'Cloridrato de Dipirona 10 Comprimidos',
      price: 'R$ 29,90',
      slug: 'cloridrato-de-dipirona-10-comprimidos',
    },
    {
        image: Doril,
        name: 'Doril 10 Comprimidos',
        price: 'R$ 19,90',
        slug: 'doril-10-comprimidos',
    },
    {
        image: Befenol,
        name: 'Befenol 30 cápsulas',
        price: 'R$ 59,90',
        slug: 'befenol-30-cápsulas',
    },
    {
        image: Resfenol,
        name: 'Resfenol 30 comprimidos',
        price: 'R$ 39,90',
        slug: 'resfenol-30-comprimidos',
    },
    {
        image: Benegrip,
        name: 'Benegrip com 4 unidades',
        price: 'R$ 9,90',
        slug: 'benegrip-com-4-unidades',
    },
    {
        image: Xanax,
        name: 'Alprazolam 1mg 30 comprimidos',
        price: 'R$ 89,00',
        slug: 'alprazolam-1mg-30-comprimidos',
    },
    {
        image: Serenata,
        name: 'Sertralina 60 comprimidos',
        price: 'R$ 169,90',
        slug: 'sertralina-60-comprimidos',
    },
    {
        image: Sedafit,
        name: 'Seratif 30 cápsulas',
        price: 'R$ 55,90',
        slug: 'seratif-30-cápsulas',
    },
  ];

function ProductCard({ image, name, price, index }) {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="shadow-slate-700 h-80 mb-4 mt-4 justify-evenly rounded-md p-6 flex flex-col items-center">
        <img src={image} className='mt-4 h-56 w-56' alt={`Foto de ${name}`}></img>
        <h4 className='mt-4 text-sm'>{name}</h4>
        <h3 className='mt-2 text-lg'>{price}</h3>
        <div className="mt-2 flex space-x-2">
           <button className='rounded p-0.5 px-2 bg-red-500 text-slate-50'>Comprar</button>
           <Link to={`/product/${slug}`} className='rounded p-0.5 px-2 bg-green-500 text-slate-50'>Detalhes</Link>
        </div>
      </div>
    );
  }

  function SectionPills() {
    return (
      <section className="h-2/3 w-full md:mt-0.5 lg:mt-9 xl:mt-9 2xl:mt-0.5 lg:flex justify-between m-auto flex-wrap">
        <div className="product-container w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} index={index} {...product} />
          ))}
        </div>
        <Footer />
      </section>
    );
  }


export default SectionPills