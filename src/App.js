import React ,{Component}from 'react';
import { Row, Col } from 'antd';
import Home from  './Components/Home'
import DataList from  './Components/List'
import Title from  './Components/Title'

import './App.css';

export  default  class  App extends Component {
    constructor(props){
        super(props);
        this.state={
            message:'Hi,React',
            list:[
                {
                    name:'迪迦奥特曼',
                    age:32
                },
                {
                    name:'泰罗奥特曼',
                    age:38
                }
            ]
        }
    }
    render(){
        let {message,list}=this.state
          return (
            <div >
                <Title message={message}/>
                <Row>
                    <Col span={6}> <Home message={message}/></Col>
                    <Col span={12}> <DataList list={list}/></Col>
                </Row>
            </div>
            )
    }
}

