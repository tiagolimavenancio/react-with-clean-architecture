import { IUserDTO } from "../../domains/dto/interfaces/IUserDTO";
import { ISessionRepository } from "../../domains/useCases/repository-interfaces/ISessionRepository";
import { IHttp } from "../infrastructures/interfaces/IHttp";
import { IStorage } from "../infrastructures/interfaces/IStorage";

class SessionRepository implements ISessionRepository {
  constructor(private readonly http: IHttp, private readonly storage: IStorage) {}

  async login(userDTO: IUserDTO): Promise<string> {
    try {
      const response = await this.http.request({
        method: "POST",
        url: "http://localhost:7777/login",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          id: userDTO.id,
          pw: userDTO.pw,
        },
      });

      if (response?.token) {
        return response.token;
      } else {
        return "";
      }
    } catch (error) {
      return "";
    }
  }

  getToken(): Promise<string> {
    return this.storage.get("token");
  }

  setToken(token: string): void {
    this.storage.set("token", token);
  }

  removeToken(): void {
    this.storage.remove("token");
  }
}

export default SessionRepository;
