import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { TbMessage2Search } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-md py-3"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="/" 
          className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
          aria-label="Home"
        >
          keycode
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 text-sm font-medium tracking-wide transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            className="flex items-center bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg text-sm font-medium tracking-wide transition-colors ml-6"
          >
            <TbMessage2Search className="mr-2" size={20} />
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            <HiOutlineX size={28} />
          </button>
        </div>

        <nav className="flex flex-col items-center h-full mt-12 px-6">
          <ul className="w-full space-y-5">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="flex items-center justify-center w-full max-w-xs mt-8 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <TbMessage2Search className="mr-2" size={22} />
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
