import React, {useEffect, useState} from 'react';
import axios from "axios";

function Home() {


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [isFileUploaded, setFileUploaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [searchField, setSearchField] = useState("");
    const [employees, setEmployees] = useState([]);


    const handleClick = async () => {
        try {
            const response = await fetch('https://localhost:7290/api/Employee', {
                method: 'POST',
                body: JSON.stringify({
                    filename: fileName
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
            window.location.reload(false);
        }
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const {data} = await axios.get(`https://localhost:7290/api/Employees`);
                // console.log(data);
                setEmployees(data);
            } catch (err) {
                console.error(err);
                setErr(err)
            }
        };
        fetch();
    }, []);


    const saveFile = (e) => {
        if (e.target.files[0] === undefined) {
        } else {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }

    };


    const uploadFile = async (e) => {
        const formData = new FormData();
        if (file === undefined) {
            console.log("Choose correct file")

        } else if (file.name.slice(-4) !== ".csv") {
            console.log("Choose .csv file")
        } else {

            formData.append("formFile", file);
            formData.append("fileName", fileName);
            try {
                const res = await axios.post("https://localhost:7290/api/file", formData);
                if (res.status === 201) {
                    setFileUploaded(true);
                }

            } catch (ex) {
                console.log(ex);
            }
        }

    };

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
                            <td><a href={"employee/" + employee.id}>{employee.payrollNumber}</a></td>
                            <td>{employee.forename}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.address}</td>
                            <td>{employee.emailHome}</td>
                            <td><a href={`employee/delete/${employee.id}`}>
                                <button className="btn btn-danger">Delete</button>
                            </a></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        );
    }

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


    return (

        <>
            {err && <h2>{err}</h2>}

            <h2> Upload .csv file for importing employees</h2>
            <p> You can upload only .csv files</p>
            <input type="file" onChange={saveFile}/>

            <input type="button" value="upload" onClick={uploadFile}/>
            <p></p>
            {isFileUploaded && (<button className="btn btn-primary" onClick={handleClick}>Import</button>)}

            {isLoading && <h2>Loading...</h2>}

            {/*<Search/>*/}
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

export default Home;