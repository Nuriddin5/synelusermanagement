import React, {useState} from 'react';
import Person from "./Person";

function Search({details}) {

    const [searchField, setSearchField] = useState("");


    const filteredPersons = details.filter(
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
                    {filteredPersons.map(employee =>
                        <Person key={employee.payrollNumber} employee={employee}/>
                    )}
                    </tbody>
                </table>
            </>
        );
    }

    return (<>
            {/*<button className="btn btn-primary" onClick={handleClick}>Import</button>*/}
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