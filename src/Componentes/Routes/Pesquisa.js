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
    <div className="flex-grow bg-white p-6 md:p-12 rounded-xl shadow-lg w-full max-w-3xl space-y-6 m-auto flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Pesquisar Remédio</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
              type="text" 
              placeholder="Digite o nome do remédio..."
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-400"
          />
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-700"
          >
            Pesquisar
          </button>
        </form>

        <div className="mt-6 flex-grow">
          {results.length > 0 ? (
            results.map(product => (
              <div key={product.slug} className="border p-4 rounded-md space-y-2">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                <h3 className="font-medium text-lg">{product.name}</h3>
                <span className="text-orange-500 font-semibold">{product.price}</span>
                <p className="text-gray-600">{product.description}</p>
                <button 
                  onClick={() => handlePurchase(product)}
                  className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-700"
                >
                  Comprar
                </button>
              </div>
            ))
          ) : (
            searchTerm && <p className="text-gray-600">Nenhum medicamento encontrado.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
