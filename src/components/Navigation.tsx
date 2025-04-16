import React from 'react';
import { Menu, Home, BookOpen, Music2, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Music2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">GuitarSocial</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" current={location.pathname === '/'} />
            <NavLink to="/blogs" icon={<BookOpen className="h-5 w-5" />} text="Blogs" current={location.pathname === '/blogs'} />
            <NavLink to="/" icon={<Music2 className="h-5 w-5" />} text="Chords" current={location.pathname === '/chords'} />
            <NavLink to="/marketplace" icon={<ShoppingBag className="h-5 w-5" />} text="Marketplace" current={location.pathname === '/marketplace'} />
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text, to, current }: { icon: React.ReactNode; text: string; to: string; current: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 ${
        current ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}