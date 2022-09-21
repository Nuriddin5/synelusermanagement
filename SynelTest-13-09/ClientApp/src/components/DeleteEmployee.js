import {useParams} from "react-router-dom";
import {Navigate} from "react-router-dom";

export default function DeleteEmployee() {
    const {id} = useParams()
    const deleteEmployee = async () => {

        try {
            const response = await fetch(`https://localhost:7290/api/Employees/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

        } catch (err) {
            // setErr(err.message);
        } finally {
            // setIsLoading(false);
            window.location.reload(false);
        }
    };

    deleteEmployee();

    return (
        <Navigate to="/" replace={true}/>
    )
}