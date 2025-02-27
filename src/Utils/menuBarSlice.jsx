import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      console.log("hii");
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export default menuBarSlice.reducer;
export const { toggleMenu } = menuBarSlice.actions;
