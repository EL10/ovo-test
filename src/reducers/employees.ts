import * as actions from "../actions";
import {
  EmployeeActionTypes,
  ICreateEmployee,
  IDeleteEmployee,
  IEmployee,
  IEmployeesState,
  IUpdateEmployee
  } from "../types";

export type EmployeeAction =
  | ICreateEmployee | IUpdateEmployee | IDeleteEmployee;

const initialState: IEmployeesState = {
  employees: [{
    id: "29--wrrwtert",
    firstName: "Edward",
    lastName: "Law",
    phoneNumber: "0491030056",
    department: "Development"
  }]
};

const updateObject = (oldObject: IEmployeesState, newValues: object) => {
  return Object.assign({}, oldObject, newValues);
};

export default (state: IEmployeesState = initialState, action: EmployeeAction) => {
  switch (action.type) {
    case EmployeeActionTypes.CREATE_EMPLOYEE: {
      return updateObject(state, { employees: [...state.employees,
        {
          ...action.payload
        }
      ] });
    }
    case EmployeeActionTypes.UPDATE_EMPLOYEE: {
      const employeeToUpdate = action.payload;
      return updateObject(state, { employees: {
        ...state.employees.map((employee) => {
          if (employee.id === employeeToUpdate.id) {
            return Object.assign({}, employee, employeeToUpdate);
          } else {
            return employee;
          }
        })
      } });
    }
    case EmployeeActionTypes.DELETE_EMPLOYEE: {
      const employeeToDelete = action.payload;
      return updateObject(state, {
        employees: { ...state.employees.filter((employee) => employee.id !== employeeToDelete.id) }
      });
    }
    default:
      return state;
  }
};
