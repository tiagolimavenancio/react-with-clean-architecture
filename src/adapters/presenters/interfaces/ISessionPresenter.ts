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

export interface ISessionPresenter {
  login(id: string, pw: string): Promise<string>;
  getToken(): Promise<string>;
  setToken(token: string): void;
  removeToken(): void;
}
