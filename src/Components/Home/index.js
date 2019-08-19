
import React ,{Component} from 'react';

import  From from  './../From'
export default class Home extends Component{
  render(){

      let {message}=this.props
    return(
      <div>
          <From  message={message} AddItem={this.props.AddItem}/>
      </div>
    )
  }
}
