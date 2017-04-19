/**
 * Created by ZHOU on 2017/2/15.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo1.css';
// import TodoList from './TodoList';
import ListUser from './ListUser'


export default React.createClass({
    render() {
        return (
            <div className="content-container">
                <div id="toolTip"></div>
                {/*<TodoList />*/}
                <ListUser />
            </div>
        );
    }
});
