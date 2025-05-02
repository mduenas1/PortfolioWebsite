import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `mx-4 px-6 py-2 rounded text-lg md:text-xl transition font-semibold ${
      isActive
        ? 'bg-white text-black'       
        : 'text-white visited:text-white hover:text-[#00df9a]' 
    }`;

  return (
    <nav className="bg-[#000300] px-8 h-32 md:h-40 lg:h-48 flex items-center shadow-md">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="h-32 md:h-40 lg:h-48 w-auto transition" />
      </NavLink>
      
      <div className="ml-auto flex">
        <NavLink to="/"       className={linkClass}>Home</NavLink>
        <NavLink to="/about"  className={linkClass}>About</NavLink>
        <NavLink to="/projects"className={linkClass}>Projects</NavLink>
        <NavLink to="/skills" className={linkClass}>Skills</NavLink>
        <NavLink to="/contact"className={linkClass}>Contact</NavLink>
      </div>
    </nav>
  );
}
