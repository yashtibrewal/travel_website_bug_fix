import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components and Pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hotellist from "./components/Hotellist";


// Wishlist Context Provider
import Wishlist from "./pages/wishlist";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Hotellist />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
