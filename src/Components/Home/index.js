    
import React ,{Component} from 'react';
import { Button } from 'antd';

import  From from  './../From'
export default class Home extends Component{
  render(){
      let {message}=this.props
    return(
      <div>
          <From  message={message}/>
      </div>
    )
  }
}