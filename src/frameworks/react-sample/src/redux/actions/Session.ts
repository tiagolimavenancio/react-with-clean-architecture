import { ILoginAction, ISessionActions } from "@adapters/presenters/action-interface/ISession";
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
