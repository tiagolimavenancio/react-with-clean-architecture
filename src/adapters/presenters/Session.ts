import { ILoginAction, ISessionActions } from "@adapters/presenters/action-interface/ISession";
import { ISessionPresenter } from "@adapters/presenters/interfaces/ISession";
import UserDTO from "@domains/dto/UserDTO";
import { ISessionUseCase } from "@domains/useCases/interfaces/ISession";

class SessionPresenter implements ISessionPresenter {
  constructor(
    private readonly useCase: ISessionUseCase,
    private readonly action: ISessionActions
  ) {}

  async login(id: string, pw: string): Promise<ILoginAction> {
    const token = await this.useCase.login(new UserDTO({ id, password: pw }));
    return this.setToken(token);
  }

  getToken(): Promise<string> {
    return this.useCase.getToken();
  }

  setToken(token: string): ILoginAction {
    return this.action.setToken(token);
  }

  removeToken(): ILoginAction {
    this.useCase.removeToken();
    return this.setToken("");
  }
}

export default SessionPresenter;
