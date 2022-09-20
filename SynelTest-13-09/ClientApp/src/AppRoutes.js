import Home from "./components/Home";
import ViewEmployee from "./components/ViewEmployee";

const AppRoutes = [
    {
        index: true,
        path: "/",
        element: <Home/>
    },
    // {
    //     path: '/api/Employees/:id',
    //     element: <ViewEmployee/>
    // }
    // {
    //     path: '/fetch-data',
    //     element: <FetchData />
    // }
];

export default AppRoutes;
