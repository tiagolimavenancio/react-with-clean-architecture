import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardAction, IBoardList } from "@adapters/presenters/action-interface/IBoard";

const initialState: IBoardList = {
  list: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoard: (state, action: PayloadAction<IBoardAction>) => {
      state.list = action.payload.list;
    },
  },
});

export const { getBoard } = boardSlice.actions;
export default boardSlice.reducer;
