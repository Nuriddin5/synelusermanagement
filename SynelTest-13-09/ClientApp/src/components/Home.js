import React, {useState} from 'react';
import axios from "axios";
import Search from "./Search";

function Home() {


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [isFileUploaded, setFileUploaded] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsShown(true);

        try {
            const response = await fetch('https://localhost:7290/api/get', {
                method: 'POST',
                body: JSON.stringify({
                    filename: 'dataset.csv'
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log('result is: ', JSON.stringify(result, null, 4));

            setData(result);
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // const [isCsvFile,]

    const saveFile = (e) => {
        console.log(e.target.files[0]);
        if (e.target.files[0] === undefined) {

        } else {
            setFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        }

    };


    const uploadFile = async (e) => {
        console.log(file);
        const formData = new FormData();
        if (file === undefined) {
            console.log("Choose correct file")

        } else if (file.name.slice(-4) !== ".csv") {
            console.log("Choose .csv file")
        } else {
            // console.log(e.target.files[0].name);
            console.log(file.name);

            formData.append("formFile", file);
            formData.append("fileName", fileName);
            try {
                const res = await axios.post("https://localhost:7290/api/file", formData);
                console.log(res);
                if (res.status === 201) {
                    setFileUploaded(true);
                }

            } catch (ex) {
                console.log(ex);
            }
        }

    };


    return (

        <ul>
            {err && <h2>{err}</h2>}

            <p> Upload .csv file for importing employees</p>
            <input type="file" onChange={saveFile}/>

            <input type="button" value="upload" onClick={uploadFile}/>
            <p></p>
            {isFileUploaded && (<button className="btn btn-primary" onClick={handleClick}>Import</button>)}

            {isLoading && <h2>Loading...</h2>}

            {isShown && (<Search details={data}/>)}


        </ul>

    );

}

export default Home;