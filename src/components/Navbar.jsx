import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-neutral-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="px-8 text-2xl font-extrabold tracking-wide text-white">
          AICademy
        </h1>

        {/* Nav Links */}
        <div className="flex space-x-8">
          {["About", "Learn", "Contact", "Login"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative group text-lg font-medium hover:text-blue-400 transition duration-300"
            >
              {item}
              {/* Animated Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
