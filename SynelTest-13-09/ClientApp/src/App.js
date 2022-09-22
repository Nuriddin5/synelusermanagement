import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from './components/Layout';
import './custom.css';
import ViewEmployee from "./components/ViewEmployee";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import DeleteEmployee from "./components/DeleteEmployee";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    <Route path={"employee/delete"}>
                        <Route path=":id" element={<DeleteEmployee/>}/>
                    </Route>

                    <Route path={"/"} element={<Home/>}/>
                    
                    <Route path="employee">
                        <Route path=":id" element={<ViewEmployee/>}/>
                    </Route>
                    
                    <Route path="*" element={<NotFoundPage/>}/>


                </Routes>
            </Layout>
        );
    }
}