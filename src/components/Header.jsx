import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p className="text-xl font-bold">HemmaKväll</p>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>
              Favoriter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
