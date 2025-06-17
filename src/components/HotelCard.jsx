// src/components/HotelCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useWishlist } from "../context/WishlistContext";
import { Additem } from "../features/cart/cartSlice"; // or wishlistSlice if separate
import { FaHeart } from "react-icons/fa"; // Heart icon

// const HotelCard = ({ hotel }) => {
//   const dispatch = useDispatch();

  
  
const HotelCard = ({ hotel }) => {
    const { addToWishlist } = useWishlist();
  
    const handleWishlist = () => {
      addToWishlist(hotel);
    };
  
    return (
      <div className="relative border p-4 rounded bg-white shadow hover:shadow-lg transition-all">
        {/* Wishlist Icon Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
          title="Add to Wishlist"
        >
          Add to Wishlist
          <FaHeart />
        </button>
  
        {/* Hotel Info */}
        <h3 className="font-bold text-lg">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.city}</p>
        {hotel.image && (
          <img
            src={hotel.image}
            alt={hotel.name}
            className="mt-2 w-full h-40 object-cover rounded"
          />
        )}
      </div>
    );
  };
  