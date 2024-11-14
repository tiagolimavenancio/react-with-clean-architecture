import IInfrastructures from "di/interfaces/IInfrastructures";
import IRepositories from "di/interfaces/IRepositories";
import SessionRepository from "adapters/repositories/SessionRepository";

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
  };
};
