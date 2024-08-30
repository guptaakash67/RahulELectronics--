import { React, useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="#">Rahul Electronics</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleMenuClick}
              className="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          <ul
            className={`md:flex md:space-x-6 ${
              isOpen ? "block" : "hidden"
            } absolute md:static bg-blue-600 w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 top-full`}
          >
            <li className="border-b md:border-none">
              <a
                href="#"
                className="block px-4 py-2 md:p-0 hover:text-yellow-400 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#services"
                className="block px-4 py-2 md:p-0 hover:text-yellow-400 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Services
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#about"
                className="block px-4 py-2 md:p-0 hover:text-yellow-400 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                About Us
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#contact"
                className="block px-4 py-2 md:p-0 hover:text-yellow-400 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-20">
        {/* Main content starts here */}
        <section id="home" className="p-8">
          <h2 className="text-3xl font-bold">Welcome to Rahul Electronics</h2>
          <p>Your go-to place for all AC and fridge repair needs.</p>
        </section>
      </div>
    </>
  );
};

export default Navbar;
