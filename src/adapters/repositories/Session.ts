import { IHttp } from "@adapters/infrastructures/interfaces/IHttp";
import { IStorage } from "@adapters/infrastructures/interfaces/IStorage";
import { IUserDTO } from "@domains/dto/UserDTO";
import { ISessionRepository } from "@domains/useCases/repositories-interfaces/ISession";

class SessionRepository implements ISessionRepository {
  constructor(private readonly http: IHttp, private readonly storage: IStorage) {}

  async login(userDTO: IUserDTO): Promise<string> {
    const response = await this.http.request({
      method: "POST",
      url: "http://localhost:7777/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: userDTO.id,
        pw: userDTO.password,
      },
    });

    return response?.token;
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
