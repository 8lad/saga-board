import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { complitedRandomImages } from "../utils/constants";
import { CartImageOptions } from "../utils/helpers";

export enum GameState {
  START = "start",
  PLAYING = "playing",
  END = "end",
}

export interface InitialState {
  cards: CartImageOptions[];
  fistCard: string;
  secondCard: string;
  GameState: GameState;
  clickCounter: number;
}

const initialState = {
  cards: complitedRandomImages,
  fistCard: "",
  secondCard: "",
  gameState: GameState.START,
  clickCounter: 0,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    changeGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
    setMatchData: (
      state,
      action: PayloadAction<{ id: number; imageUrl: string }>,
    ) => {
      const allCompleted = state.cards.every((card) => card.isMatched);
      const { id, imageUrl } = action.payload;
      const isBothMatched = state.fistCard === state.secondCard;
      if (allCompleted) {
        state.gameState = GameState.END;
        return;
      }
      if (!state.fistCard && state.clickCounter === 0) {
        state.fistCard = imageUrl;
        state.cards = state.cards.map((card) =>
          card.id === id ? { ...card, isRotated: true } : card,
        );
        state.clickCounter++;
        return;
      }
      if (!state.secondCard && state.clickCounter === 1) {
        state.secondCard = imageUrl;
        state.cards = state.cards.map((card) =>
          card.id === id ? { ...card, isRotated: true } : card,
        );
        state.clickCounter++;
        return;
      }
      if (isBothMatched) {
        state.cards = state.cards.map((card) =>
          card.imageUrl === state.fistCard
            ? { ...card, isMatched: true }
            : card,
        );
        state.clickCounter = 0;
        state.fistCard = "";
        state.secondCard = "";
        return;
      }
      state.clickCounter = 0;
      state.fistCard = "";
      state.secondCard = "";
      state.cards = state.cards.map((card) => ({ ...card, isRotated: false }));
    },
    resetAllState: () => ({
      ...initialState,
      gameState: GameState.PLAYING,
    }),
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { resetAllState, changeGameState, setMatchData } =
  cardsSlice.actions;
