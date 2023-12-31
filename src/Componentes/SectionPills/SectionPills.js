import { products } from "./Remedios";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function FilterComponent({ onFilterChange, activeFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = (filter) =>
    filter === activeFilter
      ? "block px-4 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600"
      : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100";

  const filterMap = {
    Todos: "all",
    "Dor e Febre": "dor-e-febre",
    Antibiótico: "antibioticos",
    "Gripe e Resfriados": "gripe-e-resfriados",
    Náusea: "nauseas",
    "Sono e Ansiedade": "sono-e-ansiedade",
  };

  return (
    <div className="mb-6 w-full sm:w-auto">
      {/* Botão para mostrar/ocultar menu de filtro */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-center w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          Filtrar
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {/* Ícone de seta para baixo */}
            <path
              fill-rule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Lista de opções de filtro */}
      {isOpen && (
        <div className="origin-top-right mt-2 w-full sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {Object.keys(filterMap).map((filterName) => (
              <button
                onClick={() => {
                  onFilterChange(filterMap[filterName]);
                  setIsOpen(false);
                }}
                className={buttonStyle(filterMap[filterName])}
                role="menuitem"
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ image, name, price, category }) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="shadow-lg bg-gray-100 h-96 mb-6 mt-6 rounded-lg p-4 flex flex-col items-center justify-between hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 w-48 relative rounded-md overflow-hidden border-2 border-orange-500 hover:border-red-500 transition-border duration-300">
        {/* Imagem do produto */}
        <img
          loading="lazy"
          src={image}
          className="absolute h-full w-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
          alt={`Foto de ${name}`}
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
          {/* Botão de compra */}
          <span className="text-white text-lg font-bold">
            <i className="fas fa-shopping-cart"></i> Comprar
          </span>
        </div>
      </div>

      {/* Informações do produto */}
      <div className="text-center">
        <h3 className="text-gray-700 font-medium">{name}</h3>

        <p className="text-sm text-red-500 font-bold mt-2">Melhor escolha!</p>
        <h4 className="mt-2 text-red-600 font-semibold">{price}</h4>
      </div>

      {/* Botões de ação */}
      <div className="mt-4 flex space-x-4 w-full px-4 justify-center">
        <Link
          to="/compra-exclusiva"
          className="rounded-md p-1 px-3 bg-red-500 text-white hover:bg-red-600 w-1/2 text-center"
        >
          Comprar
        </Link>
        <Link
          to={`/product/${slug}`}
          className="rounded-md p-1 px-3 bg-orange-500 text-white hover:bg-orange-600 w-1/2 text-center"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}

function SectionPills() {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 9;

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    if (activeFilter === "all") return true;
    return product.category === activeFilter;
  });

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <section className="h-full w-full pt-8 pb-8 md:pt-12 lg:pt-16 xl:pt-16 2xl:pt-18 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="product-container w-full max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="mb-4 text-center">
          {/* Título da seção de produtos */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
            Todos Produtos
          </h2>
          <p className="text-gray-500 mt-2">
            Selecione uma categoria abaixo para filtrar os produtos.
          </p>
        </div>

        {/* Componente de filtragem */}
        <FilterComponent
          onFilterChange={handleFilterChange}
          activeFilter={activeFilter}
        />

        {/* Grade de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full">
          {currentProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Paginação */}
        <div className="mt-8 flex justify-center items-center">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 border rounded-md hover:bg-gray-200"
          >
            Anterior
          </button>
          <span className="mx-4 flex items-center">{currentPage}</span>
          <button
            disabled={
              filteredProducts.length <= currentPage * PRODUCTS_PER_PAGE
            }
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 border rounded-md hover:bg-gray-200"
          >
            Próximo
          </button>
        </div>
        <Link to="/videos">
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600  text-white py-4 px-3 text-center text-base md:text-lg font-bold mx-2 md:mx-4 mt-6 md:mt-10 rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer">
            Destaque-se com exclusividade: <br /> Seus produtos não são apenas
            mais um na lista. Em Pilulas.com.br, quando você divulga, ninguém
            mais divulga igual. <br />
            Clique aqui e descubra como!
          </div>
        </Link>
      </div>
      <Footer />
    </section>
  );
}

export default SectionPills;
