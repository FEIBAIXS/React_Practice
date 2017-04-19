/**
 * Created by ZHOU on 2017/2/15.
 */
import React, { Component } from 'react';
import './Demo1.css';

/*var ReturnIndex = React.createClass({
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location = '/#/Demo1';
    }

    render(){
        return (
            <div>返回首页</div>
        );
    }
});*/

function getIndex(title) {
    function goIndex() {
        window.location = '/#/';
    }

    return (
       <div>
           <span className="btn-common" onClick={goIndex}>返回首页</span>
           <span className="title">{title}</span>
       </div>
    );
}


export default React.createClass({
    render() {
        return (
            <div className="header-container">
                {getIndex(this.props.title)}
            </div>
        );
    }
});
