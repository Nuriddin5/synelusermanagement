import React, {Component} from 'react';
import {FileUpload} from "./FileUpload";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {employees: [], loading: true};
    }

    componentDidMount() {
        this.populateEmployeeData();
    }

    static renderEmployeesTable(employees) {
        return (


            <>
                <FileUpload/>
                <table className='table table-striped' aria-labelledby="tabelLabel1">
                    <thead>
                    <tr>
                        <th>PayrolNumber</th>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>DateOfBirth</th>
                        <th>Telephone</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Address2</th>
                        <th>Postcode</th>
                        <th>EmailHome</th>
                        <th>StartDate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(employee =>
                        <tr key={employee.payrollNumber}>
                            <td>{employee.payrollNumber}</td>
                            <td>{employee.forename}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.dateOfBirth}</td>
                            <td>{employee.telephone}</td>
                            <td>{employee.mobile}</td>
                            <td>{employee.address}</td>
                            <td>{employee.address2}</td>
                            <td>{employee.postcode}</td>
                            <td>{employee.emailHome}</td>
                            <td>{employee.startDate}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderEmployeesTable(this.state.employees);

        return (
            <div>
                <h3 id="tabelLabel1">Upload csv file</h3>
                {contents}
            </div>
        );
    }

    async populateEmployeeData() {
        const response = await fetch('employee');
        const data = await response.json();
        this.setState({employees: data, loading: false});
    }
}
