/**
 * Created by ZHOU on 2017/2/15.
 */

import React, { Component } from 'react';
import itemdemo from './item-demo.png';
import './DemoButton.css';

class DemoButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location = this.props.url;
    }

    render() {
        return (
            <div>
                <div className="item-Container" onClick={this.handleClick}>
                    <div className="item-title">{this.props.demoName}</div>
                    <img className="item-img" src={itemdemo}></img>
                </div>
            </div>
        );
    }
}

export default DemoButton;
