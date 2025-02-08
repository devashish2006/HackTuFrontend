import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          AICademy
        </h1>

        {/* Nav Links */}
        <div className="flex space-x-8">
          {["About", "Learn", "Contact", "Login"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative group text-lg font-medium hover:text-yellow-400 transition duration-300"
            >
              {item}
              {/* Animated Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
