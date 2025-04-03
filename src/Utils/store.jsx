import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "./menuBarSlice";
import searchSlice from "../Utils/searchSlice";
import chatSlice from "../Utils/chatSlice";
const store = configureStore({
  reducer: {
    menu: menuBarSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
