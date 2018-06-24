import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './components/home/HomePage';
import CreateSandbox from './components/sandbox/CreateSandbox';
import GetSandbox from './components/sandbox/GetSandbox';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="CreateSandbox" component={CreateSandbox}/> 
        <Route path="GetSandbox" component={GetSandbox}/> 
    </Route>
);