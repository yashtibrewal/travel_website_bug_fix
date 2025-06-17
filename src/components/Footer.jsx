// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10 shadow-inner">
      <p>© {new Date().getFullYear()} TravelSite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
