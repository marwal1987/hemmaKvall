import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <p className="text-xl font-bold">HemmaKväll</p>
        <button
          className="block lg:hidden text-white text-sm text-center"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {!isOpen ? "Menu" : "Close"}
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <a href="" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Favorites
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
