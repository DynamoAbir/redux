import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type CounterType = {
  count: number;
};
const initialState: CounterType = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count = state.count + 1;
    },
    decreament: (state) => {
      state.count = state.count - 1;
    },
    decreamentByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { decreament, increament, decreamentByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
