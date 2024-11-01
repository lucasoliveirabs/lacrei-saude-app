'use client';

import { useState } from 'react';

export default function ProfissionalForm() {
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
      const response = await fetch('https://localhost:8000/api/profissionais/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Profissional cadastrado com sucesso! Profissional: '+response.json)
        alert('Profissional cadastrado com sucesso!');
      }
    } catch(err){
      console.log('err: '+err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="nome_social" placeholder="Nome Social" onChange={handleChange} />
      <input name="profissao" placeholder="Profissão" onChange={handleChange} />
      <input name="endereco" placeholder="Endereço" onChange={handleChange} />
      <input name="contato" placeholder="Contato" onChange={handleChange} />
      <button type="submit">Cadastrar Profissional</button>
    </form>
  );
}
