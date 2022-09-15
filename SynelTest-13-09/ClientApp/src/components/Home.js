import React, {Component} from 'react';
import {FileUpload} from "./FileUpload";
import Person from "./Person";
import Search from "./Search";

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
                <Search details={employees}/>
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
