import React ,{Component}from 'react';
import { Row, Col,message   } from 'antd';
import Home from  './Components/Home'
import DataList from  './Components/List'
import Title from  './Components/Title'
import DoneList from  './Components/DoneList'

import './App.css';

export  default  class  App extends Component {
    constructor(props){
        super(props);
        this.state={
            message:'Hi,React',
            list:[ '吃饭','睡觉'],
            checklist:[]
        }
    }
    AddItem=item=>{
        const  list=this.state.list
        if(!item.trim()){
            message.error('This can not empty！！！')
            return
        }
        if(list.includes(item)){
            message.error('This is already exists')
        }else{
             list.push(item)
        }
        this.setState({
            list
        })
    }
    SetCheckList=checklist=>{
        const AllList=this.state.list
        AllList.forEach((item,index)=>{
            checklist.forEach(citem=>{
                if(item===citem){
                    AllList.splice(index,1)
                }
            })
        })
        this.setState({
            list:AllList,
            checklist:[...this.state.checklist,...checklist]
        })
    }
    DeleteItem=item=>{
        const AllList=this.state.checklist
        AllList.forEach((allitem,index)=>{
            console.log(item)
            if(allitem===item){
                AllList.splice(index,1)
            }
        })
        this.setState({
            checklist:AllList
        })
    }
    render(){
        let { message,list,checklist }=this.state
          return (
            <div >
                <Row  className={"margin-top"}>
                    <Col offset={1} span={22}><Title message={message}/></Col>
                </Row>
                <Row className={"margin-top"}>
                    <Col offset={1}  span={22}><Home message={message} AddItem={this.AddItem}/></Col>
                </Row>
                <Row className={"margin-top"}>
                    <Col offset={1}  span={22}> <DataList list={list}  SetCheckList={this.SetCheckList}/></Col>
                </Row>
                <Row className={"margin-top  margin-bottom"}>
                    <Col offset={1}  span={22}> <DoneList list={checklist} DeleteItem={this.DeleteItem}/></Col>
                </Row>
            </div>
            )
    }
}

