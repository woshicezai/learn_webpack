import React from "react";

export default class Name extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count:1
    }
  }
  render() {
    return (
      <div onClick={()=>{
        this.setState({
          count:this.state.count+1
        })
      }}>
        <span>我是Name组件 {this.state.count}</span>
      </div>
    );
  }
} 