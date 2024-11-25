import SessionRepository from "adapters/repositories/SessionRepository";
import BoardRepository from "adapters/repositories/BoardRepository";
import IRepositories from "./interfaces/IRepositories";
import IInfrastructures from "./interfaces/IInfrastructures";

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    board: new BoardRepository(infrastructure.http),
  };
};
