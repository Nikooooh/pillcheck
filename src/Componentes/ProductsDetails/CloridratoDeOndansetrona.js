import { useParams } from "react-router-dom";
import { products } from "../SectionPills/Remedios";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { slug } = useParams();

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return (
      <div className="text-center mt-12 text-xl font-bold">
        Produto não encontrado.
      </div>
    );
  }

  const { image, name, price, description } = product;

  return (
    <div className=" min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-grow mt-12">
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="flex flex-1 items-center justify-center mb-6 md:mb-0 max-w-xs md:max-w-none mx-auto">
            <img
              src={image}
              alt={`Foto de ${name}`}
              className="w-full max-h-48 md:max-h-80 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between ml-0 md:ml-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{name}</h2>
              <p className="text-orange-600 text-xl mb-8 font-semibold">
                Preço: {price}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                to="/compra-exclusiva"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300 font-bold text-xl shadow-md transform hover:scale-105"
              >
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
