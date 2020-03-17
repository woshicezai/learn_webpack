import React from "react";
import "./search.css";
import Name from './Name';
import test from "./imgs/test.png";
import { hot } from "react-hot-loader/root";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0
    };
    this.list = [];
  }

  onClick = () => {
    this.list.push(1);
    this.setState(() => {
      return {
        length: this.list.length
      };
    });
  };
  render() {
    let { length } = this.state;
    return (
      <div>
        <div onClick={this.onClick} className="search-text">
          Search Text123123,{length}
        </div>
        <img src={test}/>
        <Name/>
      </div>
    );
  }
}

export default hot(Search);