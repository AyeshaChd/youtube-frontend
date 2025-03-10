import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "./menuBarSlice";
import searchSlice from "../Utils/searchSlice";
const store = configureStore({
  reducer: {
    menu: menuBarSlice,
    search: searchSlice,
  },
});
export default store;
