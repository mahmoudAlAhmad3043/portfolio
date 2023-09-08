import React, { Component } from "react";
import img1 from "./../img/work1.jpg";
import img2 from "./../img/work2.jpg";
import img3 from "./../img/work3.jpg";
import img4 from "./../img/work4.jpg";
import img5 from "./../img/work5.jpg";
import CardSlid from "./CardSlid";
import Slid from "./Slid";

class WorksContains extends Component {
  constructor(props) {
    super(props);

    this.arrImg = [img1, img2, img3, img4, img5];
  }
  setIndex(){
    console.log("sdsadfa");
  }
  render() {
    let styleCol = "flex flex-col gap-2";
    let styleImg = "w-full hover:opacity-50 transition-all duration-700";
    return (
      <div className="col-span-2 flex flex-row justify-between gap-2 sm:flex-col">
        <div className={styleCol}>
          <button>
            <img src={this.arrImg[0]} alt="not found" className={styleImg} id="img0"/>
          </button>
          <button >
            <img src={this.arrImg[1]} alt="not found" className={styleImg} id="img1"/>
          </button>
          <button>
            <img src={this.arrImg[2]} alt="not found" className={styleImg} id="img2"/>
          </button>
        </div>
        <div className={styleCol}>
          <button>
            <img src={this.arrImg[3]} alt="not found" className={styleImg}  id="img3"/>
          </button>
          <button>
            <img src={this.arrImg[4]} alt="not found" className={styleImg} id="img4" />
          </button>
        </div>
      </div>
    );
  }
}

export default WorksContains;
