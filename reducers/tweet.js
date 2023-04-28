import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    sendTweetSubmit: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTweetSubmit: (state) => {
      state.value = [];
    },
  },
});

export const { sendTweetSubmit, deleteTweetSubmit } = tweetSlice.actions;
export default tweetSlice.reducer;
