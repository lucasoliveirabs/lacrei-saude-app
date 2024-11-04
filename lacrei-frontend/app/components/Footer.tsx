import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-6 text-gray-600">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="/direitos">Direitos do Titular</Link>
          <Link href="/acessibilidade">Acessibilidade</Link>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </div>
        <p className="text-center text-sm">© 2024 Lacrei Saúde - CNPJ 12.345.678/0001-12</p>
      </div>
    </footer>
  );
}
