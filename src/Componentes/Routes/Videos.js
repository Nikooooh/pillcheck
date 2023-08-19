import React from 'react';
import Footer from '../Footer/Footer';

function DivulgueAqui() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">


      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-0 md:max-w-5xl">

          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Vídeos de Apresentação</h1>
            <p className="text-lg text-gray-600">Assista nossos vídeos e conheça mais sobre nossos serviços. Escolha seu idioma!</p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
     
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Português-BR:</h2>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 duration-300">
                <video controls className="w-full h-auto">
                  <source src="/PilulasBR.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div>

            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">English:</h2>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 duration-300">
                <video controls className="w-full h-auto">
                  <source src="/pilulasUS.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DivulgueAqui;
