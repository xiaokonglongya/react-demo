import React,{Component} from 'react'
import  { List,Skeleton,Modal } from  'antd'

export  default class DoneList  extends  Component{
    constructor(props){
        super(props)
    }
    DeleteItem=(item)=>{
        let _this=this
        Modal.confirm({
            title: 'Do you want to delete '+item+'?',
            content: 'Delete what has been done!',
            onOk() {
                _this.props.DeleteItem(item)
            },
            onCancel() {

            },
        });
    }
    render(){
        const data=this.props.list
        return(
            <div>
                <p>已经完成的</p>
                <List
                    size="large"
                    bordered
                    dataSource={data}

                    renderItem={item =>
                        <List.Item
                        actions={[<span onClick={()=>this.DeleteItem(item)}>删除</span>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                description={item}
                            />
                        </Skeleton>

                    </List.Item>}
                >
                </List>
            </div>
        )
    }
}
