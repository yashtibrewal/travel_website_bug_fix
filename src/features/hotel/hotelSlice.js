import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔁 Async thunk to fetch hotels
export const fetchHotels = createAsyncThunk(
  'hotel/fetchHotels',
  async (countryCode) => {
    const url = `https://api.liteapi.travel/v3.0/data/hotels?countryCode=${countryCode}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-Key': 'sand_b02a0c0c-9ad6-4586-8efb-9584a34344e8',
        Accept: 'application/json'
      }
    });

    const data = await response.json();
    return data.data.map(hotel => ({
      id: hotel.id,
      name: hotel.name,
      city: hotel.city,
      image: hotel.main_photo,
    }));
  }
);

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    selectedCountry: 'IN',
    hotels: [],
    currentPage: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCountry, setCurrentPage } = hotelSlice.actions;
export default hotelSlice.reducer;
