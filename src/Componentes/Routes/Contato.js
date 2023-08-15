import React, { useState } from 'react';
import Footer from '../Footer/Footer';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-4">
      <div className="flex-grow bg-white p-6 md:p-12 rounded-xl shadow-lg w-full max-w-lg space-y-6 m-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Entre em contato</h2>
        <form action="https://formsubmit.co/521d25e87fca0b279b7da6e4ad1c744c" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-400" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-400"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-700"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;