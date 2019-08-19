import  React, {Component} from  'react'
import { Descriptions } from 'antd';
export  default  class Title extends  Component{
    render(){
        return(
            <Descriptions title="ToDoList">
                <Descriptions.Item label="Desc">
                    Record what you do every day
                </Descriptions.Item>
            </Descriptions>
        )
    }
}