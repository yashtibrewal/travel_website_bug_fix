import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Additem } from "../features/cart/cartSlice"; // or wishlistSlice if separate
import { FaHeart } from "react-icons/fa";

import {
  setSelectedCountry,
  setCurrentPage,
  fetchHotels,
} from '../features/hotel/hotelSlice';

const Hotellist = () => {
  const dispatch = useDispatch();
  const { selectedCountry, hotels, currentPage, status } = useSelector((state) => state.hotel);
   const handleWishlist = (hotel) => {
      dispatch(Additem(hotel));
    };
  const hotelsPerPage = 5;

  useEffect(() => {
    dispatch(fetchHotels(selectedCountry));
  }, [selectedCountry, dispatch]);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const totalPages = Math.ceil(hotels.length / hotelsPerPage);
  const paginate = (page) => dispatch(setCurrentPage(page));

  const getPaginationRange = () => {
    const range = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) range.push(1, 2, 3, 4, '...');
      else if (currentPage >= totalPages - 2)
        range.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      else range.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
    }
    return range;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-4 shadow rounded">
        <div className="flex justify-center mb-4">
          <select
            className="border px-4 py-2 rounded"
            value={selectedCountry}
            onChange={(e) => dispatch(setSelectedCountry(e.target.value))}
          >
            <option value="IN">India</option>
            <option value="US">US</option>
            <option value="AU">Australia</option>
            <option value="PK">Pakistan</option>
            <option value="JP">Japan</option>
            <option value="GE">Germany</option>
            <option value="IL">Israel</option>
            <option value="MR">Mauritania</option>
            <option value="NP">Nepal</option>
            <option value="RU">Russia</option>
          </select>
        </div>

        <p className="text-center mb-6 text-lg text-blue-700">
          Selected Country: {selectedCountry}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {status === 'loading' ? (
            <p className="col-span-full text-center text-gray-500">Loading...</p>
          ) : currentHotels.length > 0 ? (
            currentHotels.map((hotel) => (
              <div key={hotel.id} className="border p-4 rounded bg-white shadow">
                <h3 className="font-bold text-lg">{hotel.name}</h3>
 <button

        onClick={()=>{handleWishlist(hotel)}}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
        title="Add to Wishlist"
      >
        Add to Wishlist
        <FaHeart />
      </button>

            
                <p className="text-gray-600">{hotel.city}</p>
                {hotel.image && (
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="mt-2 w-full h-40 object-cover rounded"
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No hotels found for selected country.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {getPaginationRange().map((item, index) =>
              item === '...' ? (
                <span key={index} className="px-3 py-1 text-gray-500">...</span>
              ) : (
                <button
                  key={index}
                  onClick={() => paginate(item)}
                  className={`px-3 py-1 border rounded ${
                    item === currentPage
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-blue-500 hover:bg-blue-100'
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotellist;
