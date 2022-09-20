function Employee({employee}) {
    return (
        <>
            <tr key={employee.id}>

                <td><a href={"/api/Employees/" + employee.id}>{employee.payrollNumber}</a></td>
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
        </>

    );

}

export default Employee
