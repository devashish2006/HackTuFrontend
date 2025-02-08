import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10">
      <div className=" px-6 container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          AICademy
        </div>

        {/* Links Section */}
        <div className="flex space-x-8">
          <a
            href="#features"
            className="hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#courses"
            className="hover:text-gray-400 transition duration-300"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-purple-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .73.593 1.324 1.325 1.324h11.482v-9.293h-3.125v-3.625h3.125v-2.671c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.463.098 2.796.143v3.24h-1.919c-1.504 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.625h-3.123v9.293h6.116c.73 0 1.324-.593 1.324-1.324v-21.35c0-.732-.594-1.325-1.324-1.325z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.924 2.206-4.924 4.924 0 .386.044.763.128 1.125-4.093-.205-7.725-2.165-10.157-5.144-.425.729-.667 1.577-.667 2.482 0 1.71.87 3.218 2.188 4.099-.807-.026-1.566-.247-2.228-.617v.062c0 2.388 1.699 4.377 3.951 4.828-.413.112-.849.172-1.296.172-.317 0-.626-.03-.927-.086.626 1.956 2.444 3.379 4.6 3.418-1.685 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.176-.067 2.179 1.396 4.768 2.21 7.548 2.21 9.051 0 14.002-7.498 14.002-14.002 0-.213-.004-.425-.013-.636.962-.693 1.797-1.56 2.457-2.548z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.5 0h-15c-2.485 0-4.5 2.015-4.5 4.5v15c0 2.485 2.015 4.5 4.5 4.5h15c2.485 0 4.5-2.015 4.5-4.5v-15c0-2.485-2.015-4.5-4.5-4.5zm-11.25 20.5h-3v-10h3v10zm-1.5-11.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm12.75 11.5h-3v-5.25c0-2.25-3-2.063-3 0v5.25h-3v-10h3v1.438c1.396-2.586 6-2.778 6 2.437v6.125z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-700 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500">
        © {new Date().getFullYear()} AICademy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
