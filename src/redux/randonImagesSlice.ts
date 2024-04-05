import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BASE_URL,
  imgArray,
  RANDOM_IMAGES_AMOUNT,
  RANDOM_SINGLE_IMG_URL,
} from "../utils/constants";

interface InitialState {
  images: string[];
  isRandomImagesLoading: boolean;
  randomImagesError: string | null;
}

const initialState: InitialState = {
  images: [...imgArray],
  isRandomImagesLoading: true,
  randomImagesError: null,
};

export const fetchImages = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("randomImages/fetchImages", async (_, thunkApi) => {
  const imageUrls: string[] = [];

  for (let i = 0; i < RANDOM_IMAGES_AMOUNT; ++i) {
    const request = await fetch(`${BASE_URL}${RANDOM_SINGLE_IMG_URL}`);
    try {
      if (request.ok) {
        imageUrls.push(request.url);
      }
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
  return imageUrls;
});

export const randonImagesSlice = createSlice({
  name: "randomImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.isRandomImagesLoading = true;
    });
    builder.addCase(
      fetchImages.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.images = action.payload;
        state.isRandomImagesLoading = false;
        state.randomImagesError = null;
      },
    );
    builder.addCase(
      fetchImages.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.images = [...imgArray];
        state.isRandomImagesLoading = false;
        state.randomImagesError = action.payload || "Unexpected error";
      },
    );
  },
});

export const randonImagesReducer = randonImagesSlice.reducer;
