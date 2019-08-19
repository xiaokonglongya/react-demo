import  React ,{Component} from  'react'
import {Input,  Button, } from 'antd';

export  default class  From  extends  Component{

    constructor(props) {
        super(props);
        this.state={
            name:"",
            age:null
        }
    }
    AddItem=()=>{
        this.props.AddItem(this.state.name)
        this.setState({
            name:''
        })
    }
    SetStateName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    // SetStateAge=(e)=>{
    //     this.setState({
    //         age: e.target.value
    //     })
    // }
    render(){
        return(
            <div>
                <div className={"margin-top"}>
                    <Input ref="username" value={this.state.name} addonBefore="代办事项" onChange={(e)=>this.SetStateName(e)}   placeholder="请输入想要做的事情"  />
                </div>
                {/*<div className={"margin-top"}>*/}
                    {/*<Input  ref="age" addonBefore="年龄" onChange={this.SetStateAge}  placeholder="请输入年龄"  />*/}
                {/*</div>*/}
                <Button className={"margin-top"} type="primary" block onClick={()=>this.AddItem()}>添加</Button>
            </div>
        )
    }
}
