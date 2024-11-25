import { ISessionUseCase } from "../../domains/useCases/interfaces/ISessionUseCase";
import { ISessionPresenter } from "./interfaces/ISessionPresenter";
import UserDTO from "../../domains/dto/UserDTO";

class SessionPresenter implements ISessionPresenter {
  constructor(private readonly useCases: ISessionUseCase) {}

  async login(id: string, pw: string): Promise<string> {
    return this.useCases.login(new UserDTO({ id, pw }));
  }

  async getToken(): Promise<string> {
    return this.useCases.getToken();
  }

  setToken(token: string): void {
    this.useCases.setToken(token);
  }

  removeToken(): void {
    this.useCases.removeToken();
  }
}

export default SessionPresenter;
