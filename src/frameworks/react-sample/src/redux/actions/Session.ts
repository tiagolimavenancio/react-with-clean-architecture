import { ILoginAction, ISessionActions } from "adapters/presenters/interfaces/ISessionPresenter";
import { LOGIN } from "../interfaces/ISession";
class SessionActions implements ISessionActions {
  setToken(token: string): ILoginAction {
    return {
      type: LOGIN,
      token,
    };
  }
}

export default SessionActions;
