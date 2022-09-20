import React, {Component} from 'react';
import {Redirect, Route, Routes} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {Layout} from './components/Layout';
import './custom.css';
import ViewEmployee from "./components/ViewEmployee";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>

                    <Route path="api/Employees">
                        <Route path=":id" element={<ViewEmployee />} />
                    </Route>
                    <Route path={"/"} element={<Home/>}/>

                    <Route path="*" element={<NotFoundPage/>} />
                    {/*<Redirect to="/404" />*/}

                    {/*<Route path={'/api/Employees/:id'} element={<ViewEmployee/>}/>;*/}


                    {/*{AppRoutes.map(e =>  <Route exact path={e.path} element={e.element} />)}*/}
                    {/*{AppRoutes.map((route, index) => {*/}
                    {/*    const {element, ...rest} = route;*/}
                    {/*    return <Route key={index} {...rest} element={element}/>;*/}
                    {/*})}*/}
                    
                </Routes>
            </Layout>
        );
    }
}
