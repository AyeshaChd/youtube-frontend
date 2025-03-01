import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export default menuBarSlice.reducer;
export const { toggleMenu, closeMenu } = menuBarSlice.actions;
