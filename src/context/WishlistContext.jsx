import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (hotel) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === hotel.id)) return prev;
      return [...prev, hotel];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
