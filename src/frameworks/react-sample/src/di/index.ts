import actions from "./actions";
import infrastructures from "./infrastructures";
import presenters from "./presenters";
import repositories from "./repositories";
import _useCases from "./useCases";

const cInfrastructure = infrastructures();
const cRepositories = repositories(cInfrastructure);
const cUseCases = _useCases(cRepositories);
const cActions = actions();
const cPresenters = presenters(cUseCases, cActions);

export default {
  board: cPresenters.board,
  session: cPresenters.session,
};
