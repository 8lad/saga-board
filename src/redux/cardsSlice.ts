import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartImageOptions } from "../utils/helpers";

export enum GameState {
  START = "start",
  PLAYING = "playing",
  END = "end",
}

export interface InitialState {
  cards: CartImageOptions[];
  firstCard: string;
  secondCard: string;
  gameState: GameState;
  clickCounter: number;
  matchedId: null | number;
}

const initialState: InitialState = {
  cards: [],
  secondCard: "",
  firstCard: "",
  gameState: GameState.START,
  clickCounter: 0,
  matchedId: null as null | number,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAllImages: (state, action: PayloadAction<CartImageOptions[]>) => {
      state.cards = action.payload;
    },
    changeGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
    setMatchedCards: (state) => {
      state.cards = state.cards.map((card: CartImageOptions) =>
        card.imageUrl === state.firstCard ? { ...card, isMatched: true } : card,
      );
      state.clickCounter = 0;
      state.firstCard = "";
      state.secondCard = "";
    },
    resetMatchedCards: (state) => {
      state.cards = state.cards.map((card: CartImageOptions) => ({
        ...card,
        isRotated: false,
      }));
      state.clickCounter = 0;
      state.firstCard = "";
      state.secondCard = "";
    },
    setEndTheGame: (state) => {
      state.gameState = GameState.END;
      state.clickCounter = 0;
      state.firstCard = "";
      state.secondCard = "";
      state.cards = initialState.cards;
    },
    setMatchData: (
      state,
      action: PayloadAction<{ id: number; imageUrl: string }>,
    ) => {
      const { id, imageUrl } = action.payload;
      if (state.clickCounter === 0) {
        state.matchedId = id;
        state.firstCard = imageUrl;
        state.cards = state.cards.map((card: CartImageOptions) =>
          card.id === id ? { ...card, isRotated: true } : card,
        );
        state.clickCounter++;
        return;
      }
      if (state.clickCounter === 1 && state.matchedId !== id) {
        state.secondCard = imageUrl;
        state.cards = state.cards.map((card: CartImageOptions) =>
          card.id === id ? { ...card, isRotated: true } : card,
        );
        state.clickCounter++;
      }
    },
    resetAllState: (_, action: PayloadAction<CartImageOptions[]>) => ({
      ...initialState,
      cards: action.payload,
      gameState: GameState.START,
    }),
  },
});

export const cardsReducer = cardsSlice.reducer;
export const {
  resetAllState,
  changeGameState,
  setMatchData,
  setAllImages,
  setMatchedCards,
  resetMatchedCards,
  setEndTheGame,
} = cardsSlice.actions;
