import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Complete App</h1>
                <p>React, Router in ES6</p>
                <Link to="CreateSandbox">Let's Create a Sandbox </Link>
                <Link to="GetSandbox">Let's get a Sandbox </Link>
            </div>
        );
    }

}

export default HomePage;