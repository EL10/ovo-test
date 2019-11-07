import { combineReducers } from "redux";
import { employees } from "../../reducers";
import { IEmployeesState } from "../../types"

const rootReducer = combineReducers({
  employees
});

export interface IApplicationState {
  employees: IEmployeesState;
}

export default rootReducer;
