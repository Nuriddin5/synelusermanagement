import React from 'react';
import Person from './Person';

function SearchList({filteredPersons}) {
    const filtered = filteredPersons.map(person => <Person key={person.payrollNumber} employee={person}/>);
    return (
        <div>
            {filtered}
        </div>
    );
}

export default SearchList;