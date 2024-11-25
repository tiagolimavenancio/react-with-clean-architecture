import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken, ILoginAction } from "adapters/presenters/interfaces/ISessionPresenter";

const initialState: IToken = {
  token: "",
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<ILoginAction>) => {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = sessionSlice.actions;

export default sessionSlice.reducer;
