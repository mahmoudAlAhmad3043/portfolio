import React, { Component } from "react";
import ListSmall from "./ListSmall";

class Nav extends Component {
    constructor(props) {
      super(props)
      this.refList = React.createRef();
    }
    showList = () =>{
        this.refList.current.showList();
    }
  render() {
    return (
      <header id="my-header" className="bg-zinc-800 p-2 px-16 py-8  border-b border-b-sky-400 fixed top-0 z-40 w-full">
        <div className="grid  grid-cols-2   justify-between items-center tn:grid-cols-1">
          <a href="#my-header" className="tn:justify-self-center justify-self-start logo  font-mono text-3xl font-bold text-sky-400 ">
            myCv
            </a>
            <button  className="p-2 group  hidden md:block justify-self-end tn:justify-self-center tn:mt-3" onClick={this.showList}>
                <p className="w-3 p-0.5 bg-sky-400 mb-0.5 group-hover:w-7 transition-all duration-700"></p>
                <p className="w-5 p-0.5 bg-sky-400 mb-0.5 group-hover:w-7 transition-all duration-700"></p>
                <p className="w-7 p-0.5 bg-sky-400"></p>
            </button>
        <ListSmall ref={this.refList} />
        </div>
      </header>
    );
  }
}

export default Nav;
