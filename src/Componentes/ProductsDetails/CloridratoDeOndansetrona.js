import { useParams } from 'react-router-dom';
import { products } from '../SectionPills/Remedios';
import Footer from '../Footer/Footer';

function ProductDetail() {
  const { slug } = useParams();

  const product = products.find(product => product.slug === slug);

  if (!product) {
    return <div className="text-center mt-12 text-xl font-bold">Produto não encontrado.</div>;
  }
  
  const { image, name, price, description } = product;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-grow mt-12">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex p-6">
          <div className="md:w-1/3 p-4 flex items-center justify-center">
            <img src={image} alt={`Foto de ${name}`} className="w-full h-auto object-contain max-h-80" />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-semibold mb-4">{name}</h2>
              <p className="text-gray-700 text-xl mb-8">Preço: {price}</p>
              <p className="text-gray-800 text-lg leading-relaxed">{description}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 font-bold text-xl shadow-md">Comprar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
