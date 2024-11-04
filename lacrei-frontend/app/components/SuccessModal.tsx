import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Cadastro Concluído!</h2>
        <p className="mb-4 text-gray-700">Cadastro efetuado com sucesso.</p>
        <button
          onClick={onClose}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-full"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
