import React from 'react';

interface ErrorModalProps {
  show: boolean;
  mensagem: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ show, mensagem, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4 text-red-600">Erro</h2>
        <p className="mb-4 text-gray-700">{mensagem}</p>
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md w-full"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
