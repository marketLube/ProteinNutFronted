import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
  isCart: true,
  cart: [],
  user: null,
  isLoggedIn: false,
  curHomeColor: "#5c8e55",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setIsHome(state, action) {
      state.isHome = action.payload;
    },
    setIsCart(state, action) {
      state.isCart = action.payload;
    },
    setCurHomeColor(state, action) {
      state.curHomeColor = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.cart = action.payload.cart;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsHome, setCurHomeColor, setIsCart, setUser, setIsLoggedIn } =
  generalSlice.actions;
export default generalSlice.reducer;
