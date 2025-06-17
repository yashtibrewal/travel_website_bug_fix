// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; 

const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to="/">TravelSite</Link>
          </h1>
          <nav className="space-x-6 flex items-center">
            <Link to="/" className="hover:underline">Hotels</Link>
            
            {/* Wishlist link with heart icon */}
            <Link to="/wishlist" className="flex items-center gap-1 hover:underline">
              <FaHeart className="text-red-400" />
              Wishlist
            </Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
