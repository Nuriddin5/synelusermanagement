import React, {Component} from 'react';
import {Layout} from './components/Layout';
import './custom.css';
import Test3 from "./components/Test3";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                

                <Test3/>


            </Layout>
        );
    }
}
