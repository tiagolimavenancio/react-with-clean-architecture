import IPresenters from "di/interfaces/IPresenters";
import infrastructures from "./infrastructures";
import repositories from "./repositories";
import _useCases from "./useCases";
import presenters from "./presenters";

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = _useCases(cRepositories);
const cPresenters = presenters(cUseCases);

export default {
  session: cPresenters.session,
} as IPresenters;
