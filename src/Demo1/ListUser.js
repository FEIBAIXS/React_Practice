/**
 * Created by ZHOU on 2017/2/15.
 */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import user from './user.png';
import './ListUser.css'

Date.prototype.pattern=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}

class Todo extends Component {
    render() {
        var item = this.props.children;
        // var content = this.props.children;
        // var t = new Date().pattern("yyyy-MM-dd HH:mm:ss.S");

        var content = item.content;
        var t= item.date;

        // var t = new Date();
        // t = t.toLocaleString();
        var oi = content.indexOf(' ');
        var name = '';
        if(oi !== -1){
            name = content.slice(0, oi);
            content = content.slice(oi+1, content.length);
        }
        name = name || 'admin';
        return (
            <li className="item">
                <div className="fl">
                    <a href="#"><img src={user} alt="" className="avatar" /></a>
                </div>
                <div className="item-r">
                    <div className="msg">
                        <strong><a href="#">{name}</a></strong>
                        <span>{t}</span>
                    </div>
                    <div className="content">{content}</div>
                </div>
            </li>
        )
    }
}

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerSubmit(e) {
        e.preventDefault();

        var content = findDOMNode(this.refs.content).value.trim();

        if(!content){
            alert('不要发空的信息啦!');
            return;
        }
        //post and callback
        var t = new Date().pattern("yyyy-MM-dd HH:mm:ss.S");
        this.props.onTodoSubmit({ content: content, date: t });
        findDOMNode(this.refs.content).value = '';
        return;
    }

    render() {
        return(
            <form className="clearfix" onSubmit={this.handlerSubmit}>
                <textarea name="content" className="textarea" ref="content"></textarea>
                <button className="btn btn-1 fr mr10">发布</button>
            </form>
        );
    }
}

class TodoList extends Component {
    render() {
        var todoNodes = this.props.data.map(function(t){
            return (
                <Todo>{t}</Todo>
            )
        });

        return (
            <ul className="list clearfix">{todoNodes}</ul>
        );
    }
}

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.handlerTodoSubmit = this.handlerTodoSubmit.bind(this);
        this.state = {data: []};
    }

    handlerTodoSubmit(t) {
        var todos = this.state.data;
        var newTodos = todos.concat([t]);
        this.setState({data: newTodos});
        return;
    }

    render() {
        return(
            <div>
                <TodoForm onTodoSubmit={this.handlerTodoSubmit} />
                <TodoList data={this.state.data} />
            </div>
        );
    }
}


class ListUser extends Component {
    render() {
        return (
            <TodoBox />
        );
    }
}

export default ListUser;