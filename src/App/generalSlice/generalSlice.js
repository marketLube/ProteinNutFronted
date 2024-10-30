import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
  isCart: true,
  cart: [],
  user: null,
  
  isLoggedIn: false,
  curHomeColor: "#5c8e55",
  total: 0,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setCartTotal(state, action) {
      state.total = action.payload;
    },
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
      state.cart = action.payload?.cart;
      state.total = action.payload?.cart?.products?.reduce(
        (acc, val) => acc + val.price,
        0
      );
    },
    setCart(state, action) {
      state.cart = { ...state.cart, ...action.payload };
      state.total = state.cart?.products?.reduce(
        (acc, val) => acc + val.price,
        0
      );
      console.log(state.cart, "sl");
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  setIsHome,
  setCurHomeColor,
  setIsCart,
  setUser,
  setIsLoggedIn,
  setCartTotal,
  setCart,
} = generalSlice.actions;
export default generalSlice.reducer;
