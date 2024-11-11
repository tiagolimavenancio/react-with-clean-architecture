import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken, ILoginAction } from "@adapters/presenters/action-interface/ISession";

const initialState: IToken = {
  token: "",
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILoginAction>) => {
      state.token = action.payload.token;
    },
  },
});

export const { login } = sessionSlice.actions;
export default sessionSlice.reducer;
