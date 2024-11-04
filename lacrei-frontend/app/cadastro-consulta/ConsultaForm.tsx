'use client';

import { useState, useEffect } from 'react';
import ErrorModal from '../components/ErrorModal';
import SuccessModal from '../components/SuccessModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';

export default function ConsultaForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    data: new Date(),
    profissional: ''
  });
  const [profissionais, setProfissionais] = useState<{ id: number; nome: string; nome_social: string }[]>([]);

  useEffect(() => {
    const fetchProfissionais = async () => {
      try {
        const response = await fetch('https://localhost:8000/api/profissionais/', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          const data = await response.json();
          setProfissionais(data);
        } else {
          console.error('Erro ao listar profissionais');
        }
      } catch (err) {
        console.error('Erro em fetch de profissionais:', err);
      }
    };

    fetchProfissionais();
  }, []);

  const handleDateChange = (date: Date | null) => {
    if (date) setFormData({ ...formData, data: date });
  };

  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      data: formData.data.toISOString().split('T')[0],
    };

    try {
      const response = await fetch('https://localhost:8000/api/consultas/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        setErrorMessage('Erro ao cadastrar consulta. Verifique dados inseridos.');
        setShowErrorModal(true);
      }
    } catch (err) {
      setErrorMessage('Ocorreu um erro ao tentar cadastrar a consulta. Tente novamente mais tarde.');
      setShowErrorModal(true);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-screen bg-gray-50">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <label htmlFor="data" className="block text-gray-700 mb-2">Data:</label>
          <DatePicker
            selected={formData.data}
            onChange={handleDateChange}
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholderText="dd/mm/yyyy"
          />

          <label htmlFor="profissional" className="block text-gray-700 mb-2">Profissional:</label>
          <select
            name="profissional"
            value={formData.profissional}
            onChange={handleDropdown}
            className="w-full p-3 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option value="">Selecione um profissional</option>
            {profissionais.map((profissional) => {
              const nome_absoluto = profissional.nome_social || profissional.nome;
              return (
                <option key={profissional.id} value={profissional.id}>
                  {nome_absoluto}
                </option>
              );
            })}
          </select>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700">
            Cadastrar Consulta
          </button>
        </form>
        {showErrorModal && <ErrorModal show={showErrorModal} mensagem={errorMessage} onClose={closeErrorModal} />}
        <SuccessModal show={showSuccessModal} onClose={closeSuccessModal} />
      </main>
      <Footer />
    </>
  );
}