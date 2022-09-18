import {useState} from 'react';

const Test2 = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);
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

    console.log(data);

    return (
        <div>
            {err && <h2>{err}</h2>}

            <button onClick={handleClick}>Make request</button>

            {isLoading && <h2>Loading...</h2>}

            {data && (
                // <div>
                //     <h2>Name: {data.name}</h2>
                //     <h2>Job: {data.job}</h2>
                // </div>

                <ul>
                    {data.map(emp =>
                        (
                            <li key={emp.payrollNumber}>
                                {emp.forename}
                            </li>
                        )
                    )}
                </ul>
            )}
        </div>
    );
};

export default Test2;