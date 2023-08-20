import React, { useState } from 'react';
import { products } from '../SectionPills/Remedios';
import Footer from '../Footer/Footer';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredProducts);
  };

  const handlePurchase = (product) => {
    console.log(`Comprando ${product.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-4">
      <div className="flex-grow bg-white p-4 md:p-8 rounded-xl shadow-lg w-full max-w-xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Pesquisar Remédio</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input 
                type="text" 
                placeholder="Digite o nome do remédio..."
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-400 pl-10"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">
              🔍
            </span>
          </div>
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-700 transition duration-300"
          >
            Pesquisar
          </button>
        </form>

        <div className="mt-8 flex-grow space-y-4">
          {results.length > 0 ? (
            results.map(product => (
              <div key={product.slug} className="p-4 border rounded-md space-y-4 shadow-sm hover:shadow-md transition duration-300">
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded-md" />
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <span className="text-orange-500 font-semibold">{product.price}</span>
                  <p className="text-gray-600">{product.description}</p>
                  <button 
                    onClick={() => handlePurchase(product)}
                    className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-700 transition duration-300"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            ))
          ) : (
            searchTerm && <p className="text-gray-600 text-center mt-8">Nenhum medicamento encontrado.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;

