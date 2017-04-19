import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
import Demo1 from './modules/Demo1';
import Demo2 from './modules/Demo2';

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/Demo1" component={Demo1}/>
            <Route path="/Demo2" component={Demo2}/>
        </Router>
    ),
    document.getElementById("app")
);




