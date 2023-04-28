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
  },
});

export const { sendTweetSubmit } = tweetSlice.actions;
export default tweetSlice.reducer;
