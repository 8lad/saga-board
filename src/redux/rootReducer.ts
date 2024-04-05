import { combineReducers } from "@reduxjs/toolkit";
import { cardsReducer } from "./cardsSlice";
import { timerReducer } from "./timerSlice";
import { randonImagesReducer } from "./randonImagesSlice";

export const rootReducer = combineReducers({
  cardsReducer,
  timerReducer,
  randonImagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
