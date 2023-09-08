import React, { Component } from "react";

class CardSlid extends Component {
  constructor(props) {
    super(props);
    this.arrayTitle = [
      "Codeforces Helper",
      "Clock Application",
      "Chat Application",
      "Tourism Application",
      "Personal Web Site",
    ];
    this.arrayText = [
      "The project aims to solve a common problem faced by most programmers, which is the difficulty of choosing appropriate programming problems to increase their programming level. This is done by building a recommendation system based on analyzing the data of other users at the same programming level, and suggesting to them new issues that are appropriate to their level and helping them improve their programming skills. This is done using machine learning, artificial intelligence, and data analysis techniques to generate accurate and effective recommendations.",
      "This application is a simple wall clock, developed using C++ language and open GL library.",
      "A simple chat application developed using the Java language and RMI.",
      "This application is used to perform calculations related to a tourist office that includes photographers, tour guides, and management. It was developed using the Java language.",
      "It is my current website, I am using it to display the most important products that I produce, it was developed using React , JavaScript , Tailwindcss.",
    ];
    this.state = {
      id: 0,
      show: false,
    };
    this.hiddenSlid = this.hiddenSlid.bind(this);
  }

  hiddenSlid() {
    if (this.state.show) {
      document.getElementById("slid-root").classList.remove("slide-show");
      document.getElementById("slid-root").classList.add("slid-hidden");
      document.getElementById("root").classList.remove("hidd-root");
      this.setState({
        id: 0,
        show: false,
      });
    }
  }
  render() {
    let arrId = ["img0", "img1", "img2", "img3", "img4"];
    window.addEventListener("click", (event) => {
      if (arrId.includes(event.target.id) && !this.state.show) {
        let index = Number(event.target.id.substring(3));
        document.getElementById("root").classList.add("hidd-root");
        document.getElementById("slid-root").classList.remove("slid-hidden");
        document.getElementById("slid-root").classList.add("slide-show");
        this.setState({
          id: index,
          show: true,
        });
      }
    });
    return (
      <div className="items-start card bg-zinc-50 p-4 flex flex-col text-gray-500  overflow-auto max-h-96  xl:w-11/12">
        <button
          className="self-end span-row-1 "
          onClick={this.hiddenSlid}
        >
          Hide
        </button>
        <div className="pt-2">
          <div className="text-zinc-900 font-bold text-2xl">
            {this.arrayTitle[this.state.id]}
          </div>
          <p className="pt-6">{this.arrayText[this.state.id]}</p>
        </div>
      </div>
    );
  }
}

export default CardSlid;
