import auth from "./modules/auth";
import doctors from "./modules/doctor";
import departments from "./modules/department";
import services from "./modules/service";
import subDepartments from "./modules/subDepartment";
import parameters from "./modules/parameter";

export default function createReducers(asyncReducers) {
  return {
    auth,
    doctors,
    departments,
    services,
    subDepartments,
    parameters,
    ...asyncReducers,
  };
}
