import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import hotelReducer from '../features/hotel/hotelSlice'; 
import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    hotel: hotelReducer,
    wishlist: wishlistReducer,
  },
});

export default store;