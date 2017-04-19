/**
 * Created by ZHOU on 2017/2/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Demo1/Header';
import Container from '../Demo1/Container';
import '../Demo1/Demo1.css';

var toolTip = {
    isClose: true,
    msg: ''
};

export default React.createClass({
    render() {
        return (
            <div>
                <Header title="Demo1"/>
                <Container />
            </div>
        );
    }
})