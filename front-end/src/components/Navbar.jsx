import React from 'react';
const  Navbar=()=> {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a>MyApp</a>
        </div>
        <div className="space-x-6">
          <a
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Home
          </a>
          <a
            className="text-white hover:text-blue-300 transition duration-300"
          >Profile</a>
          <a
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Contact Us
          </a>
          <a
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
