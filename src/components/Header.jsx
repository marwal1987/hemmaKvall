import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p className="text-xl font-bold">HemmaKväll</p>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/" className="hover:underline">
              Hem
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:underline">
              Favoriter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
