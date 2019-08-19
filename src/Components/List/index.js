import React, {Component} from 'react'
import { Checkbox,Empty   } from 'antd';
import './index.css'
export default class  DataList extends  Component{
    constructor(props) {
        super(props);
        this.state={
            plainOptions:this.props.list,
        }
    }
    onChange = checkedValues => {
       this.props.SetCheckList(checkedValues)
    };


    render(){
        return(
        <div>
            <p>正在做的事情</p>
            <div className={'MessageBox'}>
                {this.state.plainOptions.length===0?(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />):''}
                <Checkbox.Group  options={this.state.plainOptions}  onChange={e=>this.onChange(e)} />
            </div>
        </div>
        )
    }
}
