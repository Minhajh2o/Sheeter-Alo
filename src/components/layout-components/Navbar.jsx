import { Link, NavLink } from 'react-router';
import { useState } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa6';
import FrostButton from '../shared-components/FrostButton';
// import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/campaigns', label: 'Donation Campaigns' },
  { path: '/how-to-help', label: 'How to Help' },
  { path: '/dashboard', label: 'Dashboard' },
];

const Navbar = () => {
  // const { user, logout } = useAuth();
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = (
    <ul className="space-y-2 text-sm font-medium text-slate-100">
      {navLinks.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-2 transition ${
                isActive ? 'bg-sky-500/20 text-sky-100' : 'text-slate-200 hover:bg-white/10'
              }`
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
      <li className="border-t border-white/10 pt-2">
        {/* {user ? (
          <button type="button" className="w-full rounded-xl bg-white/10 px-4 py-2 text-left" onClick={() => { logout(); closeMenu(); }}>
            Log out
          </button>
        ) : (
          <Link to="/login" className="block rounded-xl bg-white/10 px-4 py-2" onClick={closeMenu}>
            Login
          </Link>
        )} */}
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-900/70 backdrop-blur-xl">
      <div className="navbar relative mx-auto p-4 text-white">
        <Link to="/" className="navbar-start gap-2 flex-nowrap text-2xl font-bold tracking-tight text-sky-300 md:text-white lg:text-sky-300 xl:text-white">
          Sheeter Alo <span className="hidden md:inline lg:hidden xl:inline text-sky-300">(শীতের আলো)</span>
        </Link>
        <nav className="navbar-center hidden gap-3 text-sm uppercase tracking-[0.2em] lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive ? 'bg-sky-500/20 text-sky-100' : 'text-slate-200 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar-end items-center gap-3">
          <button
            type="button"
            className="btn btn-circle border border-white/20 bg-white/10 text-white"
            onClick={() => setIsLight((prev) => !prev)}
            aria-label="Toggle theme (upcoming feature)"
          >
            {isLight ? <FaSun /> : <FaMoon />}
          </button>
          <div className="flex items-center gap-3">
            <img
              // src={user?.photoURL || 'https://i.ibb.co/1dC4sHn/avatar-placeholder.png'}
              // alt={user?.displayName || 'Profile'}
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <button
              type="button"
              className="btn btn-circle border border-white/20 bg-white/10 text-white lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <FaBars />
            </button>
            {/* {user ? (
              <FrostButton onClick={logout} variant="ghost" className="hidden lg:inline-flex">
                Log out
              </FrostButton>
            ) : (
              <Link to="/login" className="hidden lg:inline-flex">
                <FrostButton>Login</FrostButton>
              </Link>
            )} */}
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute right-4 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl lg:hidden">
            {menuItems}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
