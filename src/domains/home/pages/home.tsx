import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch, Store } from "redux";
import * as actions from "../../../actions";
import { EmployeeAction } from "../../../reducers/employees";
import { IEmployee, IEmployeesState} from "../../../types";
import { IApplicationState } from "../../app/root-reducer";

interface IProps {
  employees: IEmployee[];
}
class Home extends Component<IProps> {
  public state = {
    searchTerm: ""
  };

  public render() {
    const employees = this.props.employees;
    return (
      <div>
        <h1>Employee Directory</h1>
        <div>
          <label htmlFor="searchEmployee">Search Employees</label>
          <input id="searchEmployee" value={this.state.searchTerm} />
        </div>
        <div>
          <label htmlFor="searchBy">Search by</label>
          <select id="searchBy">
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="department">Department</option>
          </select>
        </div>
        <ul>
          {
            employees.map((employee: IEmployee) => (
              <>
                <li>
                  First Name: {employee.firstName}<br />
                  Last Name: {employee.lastName}<br />
                  Phone Number: {employee.phoneNumber}<br />
                  Department: {employee.department}
                </li>
              </>
            ))
          }
        </ul>
        <h2>Add Employee</h2>
        <form>
          <label htmlFor="firstName"><b>First Name</b></label>
          <input placeholder="First Name" id="firstName" required={true} />

          <label htmlFor="lastName"><b>Last Name</b></label>
          <input placeholder="Last Name" id="lastName" required={true} />

          <label htmlFor="department"><b>Department</b></label>
          <input placeholder="Department" id="department" required={true} />

          <label htmlFor="phoneNumber"><b>Phone Number</b></label>
          <input placeholder="Phone Number" id="phoneNumber" required={true} />
          <button>Add Employee</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  employees: state.employees.employees
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createEmployee: (employee: IEmployee) => dispatch(actions.createEmployee(employee)),
  deleteEmployee: (employee: IEmployee) => dispatch(actions.deleteEmployee(employee)),
  updateEmployee: (employee: IEmployee) => dispatch(actions.updateEmployee(employee))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
