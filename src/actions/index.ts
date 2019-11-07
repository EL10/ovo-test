import { EmployeeActionTypes, IEmployee } from "../types";

export function createEmployee(payload: IEmployee) {
  return {
    type: EmployeeActionTypes.CREATE_EMPLOYEE,
    payload
  };
}

export function updateEmployee(payload: IEmployee) {
  return {
    type: EmployeeActionTypes.UPDATE_EMPLOYEE,
    payload
  };
}

export function deleteEmployee(payload: IEmployee) {
  return {
    type: EmployeeActionTypes.DELETE_EMPLOYEE,
    payload
  };
}
