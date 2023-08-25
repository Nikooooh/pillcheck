import React from "react";
import Footer from "../Footer/Footer";

function Sobre() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-grow">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Sobre Nós
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Bem-vindo ao nosso site dedicado a trazer informações detalhadas
            sobre medicamentos. Nosso objetivo é fornecer recursos úteis para
            ajudar as pessoas a entenderem melhor os medicamentos, suas
            indicações e usos, bem como possibilitar a compra pelo melhor preço.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Acreditamos que o conhecimento é fundamental para tomar decisões
            informadas sobre a saúde. Nossa plataforma foi projetada para ser
            acessível e fácil de usar, permitindo que você encontre rapidamente
            informações confiáveis sobre os medicamentos que procura.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Além disso, oferecemos a conveniência de fazer compras online,
            proporcionando opções de produtos e preços competitivos. Queremos
            simplificar sua experiência ao procurar informações sobre
            medicamentos e tornar o processo de compra mais conveniente.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Obrigado por escolher o nosso site. Estamos comprometidos em
            fornecer um serviço valioso e confiável para ajudar você a tomar
            decisões informadas sobre sua saúde e bem-estar.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
