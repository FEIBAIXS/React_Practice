/**
 * Created by ZHOU on 2017/2/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Index/App';
import DemoButton from '../Index/DemoButton';
import '../Index/App.css';

export default React.createClass({
    render() {
        return (
            <div>
                <App />
                <DemoButton url="/#/Demo1" demoName="Demo1"/>
                <DemoButton url="/#/Demo2" demoName="Demo2"/>
            </div>
        );
    }
})