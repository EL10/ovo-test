export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  department: string;
}

export enum EmployeeActionTypes {
  CREATE_EMPLOYEE = "employee/CREATE",
  UPDATE_EMPLOYEE = "employee/UPDATE",
  DELETE_EMPLOYEE = "employee/DELETE"
}

export interface ICreateEmployee {
  type: EmployeeActionTypes.CREATE_EMPLOYEE;
  payload: IEmployee;
}
export interface IDeleteEmployee {
  type: EmployeeActionTypes.DELETE_EMPLOYEE;
  payload: IEmployee;
}
export interface IUpdateEmployee {
  type: EmployeeActionTypes.UPDATE_EMPLOYEE;
  payload: IEmployee;
}

export interface IEmployeesState {
  employees: IEmployee[];
}
