import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@redux/reducers/counterSlice";
import sessionReducer from "@redux/reducers/sessionSlice";
import boardReducer from "@redux/reducers/boardSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    board: boardReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
