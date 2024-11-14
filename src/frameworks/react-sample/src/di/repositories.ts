import IInfrastructures from "di/interfaces/IInfrastructures";
import IRepositories from "di/interfaces/IRepositories";
import SessionRepository from "adapters/repositories/SessionRepository";
import BoardRepository from "adapters/repositories/BoardRepository";

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    board: new BoardRepository(infrastructure.http),
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
  };
};
