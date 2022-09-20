import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../Images/pagenotfound.jpg'
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound} width={589} alt="not found" className="rounded mx-auto d-block"/>
            <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}
export default NotFoundPage;