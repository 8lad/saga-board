import { combineReducers } from "@reduxjs/toolkit";
import { cardsReducer } from "./cardsSlice";
import { timerReducer } from "./timerSlice";

export const rootReducer = combineReducers({
  cardsReducer,
  timerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
