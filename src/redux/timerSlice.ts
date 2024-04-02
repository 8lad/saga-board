import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  bestTime: number[];
  totalTime: number;
}

const initialState: InitialState = {
  bestTime: [],
  totalTime: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    clearTimerState: (state) => {
      state.totalTime = 0;
      state.bestTime = [];
    },
    addTotalTime: (state, action: PayloadAction<number>) => {
      state.totalTime = action.payload;
    },
    addBestTimeItem: (state, action: PayloadAction<number>) => {
      state.bestTime.push(action.payload);
    },
  },
});

export const timerReducer = timerSlice.reducer;
export const { clearTimerState, addTotalTime, addBestTimeItem } =
  timerSlice.actions;
