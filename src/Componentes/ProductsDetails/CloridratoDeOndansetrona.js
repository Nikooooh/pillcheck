import { useParams } from 'react-router-dom';
import { products } from '../SectionPills/SectionPills';
import Footer from '../Footer/Footer';

function ProductDetail() {
  const { slug } = useParams();

  const product = products.find(product => product.slug === slug);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }
  const { image, name, price, description } = product;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-grow">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2">
            <img src={image} alt={`Foto de ${name}`} className="w-full h-auto object-cover" />
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{price}</p>
            <div className="border-t border-gray-300 pt-4 mt-4">
              <p className="text-gray-800 text-lg leading-relaxed mb-6">{description}</p>
              <div className="flex space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
