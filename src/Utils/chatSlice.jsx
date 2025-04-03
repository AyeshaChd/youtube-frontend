import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessages: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});
export const { addmessages } = chatSlice.actions;
export default chatSlice.reducer;
