import { combineReducers } from "@reduxjs/toolkit";
import { cardsReducer } from "./cardsSlice";

export const rootReducer = combineReducers({
  cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
