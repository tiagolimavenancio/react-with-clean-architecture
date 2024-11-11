export interface IToken {
  token: string;
}

export interface ILoginAction {
  type: string;
  token: string;
}

export interface ISessionActions {
  setToken(token: string): ILoginAction;
}
