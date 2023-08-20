import React from 'react';
import Footer from '../Footer/Footer';

function DivulgueAqui() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-0 md:max-w-5xl">

          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Vídeo de Apresentação</h1>
            <p className="text-lg text-gray-600">Assista nosso vídeo e conheça mais sobre nossos serviços.</p>
          </div>
      
          <div className="grid grid-cols-1 gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Português-BR:</h2>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 duration-300">
         <div className="relative" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            title="Vídeo de Apresentação em Português-BR"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/taXSQAFr3Dk" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
           </iframe>
          </div>
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
