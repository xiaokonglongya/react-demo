import  React ,{Component} from  'react'
import { Input, Select, Icon } from 'antd';

export  default class  From  extends  Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <Input prefix="姓名"   placeholder="请输入姓名"  />
                <Input prefix="年龄"   placeholder="请输入年龄"  />
            </div>
        )
    }
}