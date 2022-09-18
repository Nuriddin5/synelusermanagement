import React, {useState, useEffect} from 'react';
import axios from "axios";
import Search from "./Search";

function Test() {


    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [isFileUploaded, setFileUploaded] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [data, setData] = useState([]);

    const handleClick = () => {
        setIsShown(true);
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
    useEffect(() => {
            const fetchData = async () => {
                // const res2 =await fetch(
                //     'https://localhost:7290/api/file',
                // );
                // const json2 = await res.json();
                const res = await fetch(
                    'https://localhost:7290/api/file',
                );
                const json = await res.json();
                setData(json);
            };
            fetchData();

        },
        [setData]
    )
    ;


    return (

        <ul>

            <p> Upload .csv file for importing employees</p>
            <input type="file" onChange={saveFile}/>

            <input type="button" value="upload" onClick={uploadFile}/>
            <p></p>
            {isFileUploaded && (<button className="btn btn-primary" onClick={handleClick}>Import</button>)}

            {isShown && (<Search details={data}/>)}


        </ul>

    );

}

export default Test;