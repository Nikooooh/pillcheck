import {products} from './Remedios';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function ProductCard({ image, name, price }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="shadow-lg bg-gray-100 h-96 mb-6 mt-6 rounded-lg p-4 flex flex-col items-center justify-between hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 w-48 relative rounded-full overflow-hidden">
        <img src={image} className="absolute h-full w-full object-cover object-center" alt={`Foto de ${name}`} />
    </div>

      <div className="text-center">
          <h4 className='text-gray-700 font-medium'>{name}</h4>
          <h3 className='mt-2 text-red-600 font-semibold'>{price}</h3>
      </div>

      <div className="mt-4 flex space-x-4 w-full px-4 justify-center">
          <button className='rounded-md p-1 px-3 bg-red-500 text-white hover:bg-red-600 w-1/2 text-center'>Comprar</button>
          <Link to={`/product/${slug}`} className='rounded-md p-1 px-3 bg-orange-500 text-white hover:bg-orange-600 w-1/2 text-center'>Detalhes</Link>
      </div>
    </div>
  );
}

function SectionPills() {
  return (
    <section className="h-full w-full pt-8 pb-8 md:pt-12 lg:pt-16 xl:pt-16 2xl:pt-18 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="product-container w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Footer />
    </section>
  );
}


export default SectionPills;
