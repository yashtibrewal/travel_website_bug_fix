// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    Additem: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload.id);
      console.log(action.payload)
      if (existItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.push ({ ...action.payload, qty: 1 });
        console.log( state)
      }
      return state;
    },
    Removeitem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    Incrementqty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    Decrementqty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { Additem, Removeitem, Incrementqty, Decrementqty } = cartSlice.actions;
export default cartSlice.reducer;
