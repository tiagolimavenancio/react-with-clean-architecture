import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../reducers/sessionSlice";
import boardReducer from "../reducers/boardSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
