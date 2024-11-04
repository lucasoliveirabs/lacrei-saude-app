import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
          <img src="/logo.png" alt="Lacrei Saúde" className="h-8" />
        </Link>
        <nav className="space-x-6">
          <Link href="/quem-somos" className="text-gray-700 hover:text-green-600 font-semibold">Quem Somos</Link>
          <Link href="/ajuda" className="text-gray-700 hover:text-green-600 font-semibold">Ajuda</Link>
          <button className="relative inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700">
            Entrar
          </button>
        </nav>
      </div>
    </header>
  );
}
