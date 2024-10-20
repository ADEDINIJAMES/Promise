import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT US", path: "/about" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT US", path: "/contact" },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <div className="bg-gray-200 flex items-center justify-between p-5 md:p-10 h-20">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 h-14 md:w-36 md:h-20" />

      {/* Navigation Menu for Large Screens */}
      <ul className="hidden md:flex space-x-8 font-bold text-gray-800">
        {menuItems.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-blue-600">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Toggle Button for Small and Medium Screens */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineMenu className="text-2xl" />
          )}
        </button>

        {/* Overlay and Navigation Menu for Small and Medium Screens */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-white z-50 flex h-60 flex-col justify-center items-center md:hidden transition-all duration-300"
            ref={menuRef}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <AiOutlineClose className="text-2xl" />
            </button>
            <ul className="flex flex-col items-center space-y-0 text-lg font-bold text-gray-800 divide-y divide-gray-300 w-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600 transition-colors py-3 w-full text-center"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
