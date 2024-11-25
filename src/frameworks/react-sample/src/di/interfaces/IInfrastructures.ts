import { IHttp } from "adapters/infrastructures/interfaces/IHttp";
import { IStorage } from "adapters/infrastructures/interfaces/IStorage";

export default interface IInfrastructures {
  http: IHttp;
  storage: IStorage;
}
