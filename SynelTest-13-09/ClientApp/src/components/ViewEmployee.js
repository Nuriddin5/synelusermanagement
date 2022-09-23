import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
const { REACT_APP_API_ENDPOINT } = process.env;

export default function ViewEmployee() {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});
    const [err, setErr] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                const {data} = await axios.get(`${REACT_APP_API_ENDPOINT}/Employees/${id}`);
                setEmployee(data);
            } catch (err) {
                setErr(err)
            }
        };
        fetch();
    }, []);

    return <>
        {err ? <NotFoundPage/> : <div className="d-flex justify-content-evenly">
            <div className="table-img"><img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPDw8QDw8QDw0PEBAQEBAPDw8QFREXFhURExMYHSggGBolGxMVITEhJSo3Li4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgUBAwQGB//EADsQAAIBAgIFCQYFAwUAAAAAAAABAgMRBSEEEjFBUTJSYXGBkbHB0QYiQnKh4RNTYqLwFSOSFENjwtL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAABi4GQYuNYDIMawuBkGLmQAAAAAAAAAAAAAAAAAAAAAAAAAMNkWwJNmHIiYlJJXbSS2t5JASuYKyvjdKOUbz6so97OSePz3U4rrbfoBfA87/XqvNp90vUyseqb4Q/cvMD0IKOHtA99Jdkvsb4Y7Se2M49ia8QLUycdLEqMtlSK+b3fE6075rNAS1jKZAAbAQTJJgZAAAAAAAAAAAAAAAAIthsiAAAA8xi2nurLVi/7cXl+p85+RcY1pGpSdts/cXbt+h5cAAAAAAAAAbaGkTg7wk49TyfWt5qAHosNxdTahUtGT2SXJk+HQy1PEHp8F0x1KdpO84WTfFbn/OAFgAAJKRI1mUwJgAAAAAAAAAARkzLZAAAAAAAoPaSp70I8IuXe7f9SnLHH3/efRGK8/MrgBOFKUuTGT6k2XOhYbGKTmtaXB8mPZvLADys6co8qLXWmiJ6uUU1ZpNcHmir03C/ipLrh6egFQDMk07NWa2p5MwAAAAs/Z+dqtudBrusysLT2eheq3zYP6tL1A9GAAAAAlFkjWSiwJAAAAAABiTAi2YAAAAAAAPN+0ELVb7pQj9MjThNHWqJvZD3u3d/OgsvaOCcYS3xk12NfZEMFpWpuXOf0WXjcCwAAAAAaq2jwnyop+PecdTCKb5MpR7mixAFQ8Ge6ov8X6mP6M/zF/i/UuABRadh34cVJS1s7PK23ed/s3T92c+MlFdiv5m3EY3pT+W/c7+RuwaKjRgt7Tk+138LAdwAAAAAZRgAbARiyQAAACEiZrAAAAAAAAArsUp60Ki6Lrsz8iWj09WEY8Ipdu86K6z6zWAAAAAAAAAAAGrSo3hNLa4td5v0eNmktiVuxETbQW1gbgAAAAAAAZRM1mxAAABhkCciAAAAAAAAAEK0brqOex1kakbqwHMAAAAAAAAAEgFjppxsjMY2VjIAAAAAAAAAnEgTiBkAAYkQJsgAAAAAAAAAAAGmtDf3mo62Vy0iP4kqbyknkucuKA3AAAAABuow3vsOehWhKo6ad3Faz4LNK31O0AAAAAAAAAAABOJAnEDIAAECZCQGAAAAAAAAAAAKTGNGcl+JHlR2226u3LqLmo7JnMBS6Ni0llNay4rKX3O6GJUX8VutM0abhaleVOye+L2Pq4FZU0WpHbCXddd6AuqmJ0l8Tl0JPzK/SsUnLKPuLr959u44NV8H3E40ZvZGT6otgdmBTtWS5ylH6X8j055bQtErKcJ6jWrKLztHK+e09SAAAAAAAAAAAA2IgiYAAADEkZAGsGWYAAAAARnOMc5NRXS0gJA0Q0unK+rJStt1XcxOq30AZrTvkawAAAAAAAb6M7q3A0ADrBpjW4mP9ZSvqucVJbm0n9QN4Cd9mYAAAAAAJRJBAAAAAAAxJGttLN5JbW9iNpS+0VCo4qUW3BcqK3fq6QJ6TjVKOUbzfRlHvZw1ceqPkxjHrvJ+RUgDrq4jWltqSXy+74HLJt5t3fF5swAJ0qkotSi7Nb0W2i4tF5VFqvis4v0KYAeqhNSV4tNcU7okeVhNxd4tp8U7HVTxOqviUvmS8gPQApo4zLfCL6m16mxYz/x/u+wFqCpeM8Kf7vsa54xPdGK67sC6NVavCHKkl0b+4oqmn1ZbZtfL7vgcrAs9LxVvKn7q5z5XZwK1mABOnUlHkycflbXgddLFq8fj1vmSf12nCALmlj8vjpp9MW19HcstExOlUsk9WT+GWTfU9jPKAD25KKKnAKtWcXr5wWUZPlN8OlFwAAAAAAAAAMNGQB5rGMKdO9Smr09rXM+xUnumiixTBds6K6XD/wA+gFEDLRgAAAAAAAAAAAAAAAAAAABYYVhrrO7uqa2vndCN+GYM52nVTjDao7JS6+CPRQgkkkkksklkkApwUUoxVklZJbkSAAAAAAAAAAAAAAAOHT8Mp1c+TPnLb2reed03DqlLlK8edHOPbwPYBoDwgPU6Xg1KeaX4cuMdnbEqdJwStHkpVF+nJ9zArASqU5RdpRcXwaaZEAAAAAAAGYRbdkm3wSu+4DALDR8HrT2x1Fxnk+7aW2iYHTjnO9R9OUe4Ch0TQqlV2hG63yeUV1s9Dh+EQp2lL358Xsj1LzLGMUlZJJLYlkkZAAAAAAAAAAAAAAAAAAAAAAAAAjKKas0muDV0ctXC6EttOK+W8fA7ABVTwGi9jmuqS80a37PU/wAyf7fQuQBTL2eh+ZPuiTjgFFbXN9qXgi2AHDTwmhH/AG0/mbl4nZTpxirRiorgkkiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                alt="person"/>
                <div className="d-flex justify-content-center">
                    <a href={`employee/delete/${employee.id}`}>
                        <button className="btn btn-danger">Delete</button>
                    </a>
                </div>
            </div>
            <div className="fw-bold">
                <div>PayrolNumber</div>
                <div>Forename</div>
                <div>Surname</div>
                <div>DateOfBirth</div>
                <div>Telephone</div>
                <div>Mobile</div>
                <div>Address</div>
                <div>Address2</div>
                <div>Postcode</div>
                <div>EmailHome</div>
                <div>StartDate</div>
            </div>
            <div className="table-content">
                <div>{employee.payrollNumber}</div>
                <div>{employee.forename}</div>
                <div>{employee.surname}</div>
                <div>{employee.dateOfBirth}</div>
                <div>{employee.telephone}</div>
                <div>{employee.mobile}</div>
                <div>{employee.address}</div>
                <div>{employee.address2}</div>
                <div>{employee.postcode}</div>
                <div>{employee.emailHome}></div>
                <div>{employee.startDate}</div>
            </div>
        </div>}
    </>
}

