import React, {Component} from 'react'
import { List, Typography } from 'antd';
export default class  DataList extends  Component{

    constructor(props) {
        super(props);
    }
    render(){
        let data=this.props.list
        return(
            <div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                           {item.name}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}