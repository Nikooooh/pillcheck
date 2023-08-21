import React from 'react';
import Footer from '../Footer/Footer';

function DivulgueAqui() {
  return (
    <div className="flex flex-col min-h-screen">  
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-0 md:max-w-5xl">

          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Vídeo de Apresentação</h1>
            <p className="text-lg text-gray-600 mb-6">Assista nosso vídeo e conheça mais sobre nossos serviços.</p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Português-BR:</h2>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 duration-300 hover:border-gray-300 hover:border-2">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    title="Vídeo de Apresentação em Português-BR"
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/taXSQAFr3Dk" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300">
              Saiba mais sobre nossos serviços
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DivulgueAqui;

