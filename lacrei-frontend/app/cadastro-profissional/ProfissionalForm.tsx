'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorModal from '../components/ErrorModal';
import SuccessModal from '../components/SuccessModal';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProfissionalForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setSuccessModal] = useState(false);
  const [showConsultaButton, setShowConsultaButton] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    nome_social: '',
    profissao: '',
    endereco: '',
    contato: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await fetch('${process.env.LOCALHOST_API_BASE_URL}/profissionais/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSuccessModal(true);
      } else {
        setErrorMessage(`Erro ao cadastrar profissional. A pessoa já não foi cadastrada?`);
        setShowErrorModal(true);
      }
    } catch(err){
      if (process.env.NODE_ENV === 'development') {
          console.error('Detalhes do erro:', err);
      }
      setErrorMessage('Ocorreu um erro ao tentar cadastrar a pessoa profissional. Tente novamente mais tarde.');
      setShowErrorModal(true);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const closeSucccessModal = () => {
    setShowConsultaButton(true);
    setSuccessModal(false);
  };
  
  return (
    <>
    <Header />
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="flex flex-col items-center">
      {showConsultaButton && (
        <button
          onClick={() => router.push('/cadastro-consulta')}
          className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Cadastrar Consulta
        </button>
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <input name="nome" placeholder="Nome" onChange={handleChange} className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input name="nome_social" placeholder="Nome Social" onChange={handleChange} className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input name="profissao" placeholder="Profissão" onChange={handleChange} className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input name="endereco" placeholder="Endereço" onChange={handleChange} className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input name="contato" placeholder="Contato" onChange={handleChange} className="w-full p-3 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700">
            Cadastrar Profissional
        </button>      
        </form>
    </div>
    {showErrorModal && <ErrorModal show={showErrorModal} mensagem={errorMessage} onClose={closeErrorModal} />}      <SuccessModal show={showSuccessModal} onClose={closeSucccessModal} />
    </main>
    <Footer />
    </>
  );
}