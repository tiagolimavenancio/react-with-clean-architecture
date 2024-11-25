import { ILoginAction, ISessionActions, ISessionPresenter } from "./interfaces/ISessionPresenter";
import { ISessionUseCase } from "../../domains/useCases/interfaces/ISessionUseCase";
import UserDTO from "../../domains/dto/UserDTO";

class SessionPresenter implements ISessionPresenter {
  constructor(
    private readonly useCase: ISessionUseCase,
    private readonly action: ISessionActions
  ) {}

  async login(id: string, pw: string): Promise<string> {
    return this.useCase.login(new UserDTO({ id, pw }));
  }

  getToken(): Promise<string> {
    return this.useCase.getToken();
  }

  setToken(token: string): ILoginAction {
    this.useCase.setToken(token);
    return this.action.setToken(token);
  }

  removeToken(): ILoginAction {
    this.useCase.removeToken();
    return this.setToken("");
  }
}

export default SessionPresenter;
