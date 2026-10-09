import { useState } from 'react';

const links = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'catalogo', label: 'Catálogo', href: '#catalogo' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-black text-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        aria-label="Principal"
      >
        <a href="#inicio" className="text-xl font-bold tracking-widest">
          ZAYOR
        </a>
        <button
          type="button"
          className="md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Cerrar' : 'Menú'}
        </button>
        <ul
          id="main-menu"
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-4 bg-black p-4 md:static md:flex md:w-auto md:flex-row md:p-0`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
