import React, {useEffect, useState} from 'react';
import axios from "axios";

function Search() {

    const [searchField, setSearchField] = useState("");
    const [employees, setEmployees] = useState([]);
    const [err, setErr] = useState();


    useEffect(() => {
        const fetch = async () => {
            try {
                const {data} = await axios.get(`https://localhost:7290/api/Employees`);
                console.log(data);
                setEmployees(data);
            } catch (err) {
                console.error(err);
                setErr(err)
            }
        };
        fetch();
    }, []);

    const filteredPersons = employees.filter(
        person => {
            return (
                person
                    .forename
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person
                    .surname
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <>
                <table className='table table-striped ' aria-labelledby="tabelLabel1">
                    <thead>
                    <tr>
                        <th>PayrolNumber</th>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>Address</th>
                        <th>EmailHome</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPersons.map(employee =>
                        <tr key={employee.id}>
                            <td><a href={"/api/Employees/" + employee.id}>{employee.payrollNumber}</a></td>
                            <td>{employee.forename}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.address}</td>
                            <td>{employee.emailHome}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
    }

    return (<>
            <section className="garamond mt-5">
                <div className="navy georgia ma0 grow">
                    <h2 className="f2">Search employee by forename and surname</h2>
                </div>
                <div className="pa2">
                    <input
                        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                        type="search"
                        placeholder="Search People"
                        onChange={handleChange}
                    />
                </div>
                {searchList()}
            </section>

        </>
    );
}


export default Search;