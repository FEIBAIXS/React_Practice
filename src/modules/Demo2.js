/**
 * Created by ZHOU on 2017/2/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Index/App';
import DemoButton from '../Index/DemoButton';
import '../Index/index.css';
import Header from '../Demo1/Header';

export default React.createClass({
    render() {
        return (
            <div>
               <Header title="Demo2"/>
            </div>
        );
    }
})
