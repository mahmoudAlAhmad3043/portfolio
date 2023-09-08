import React, { Component } from "react";

class ListSmall extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.homeRef = React.createRef();
    this.workRef = React.createRef();
    this.contactRef = React.createRef();
    this.experienceRef = React.createRef();
    this.aboutRef = React.createRef();
    this.arrRef = [
      this.homeRef,
      this.aboutRef,
      this.experienceRef,
      this.workRef,
      this.contactRef,
    ];
    this.showState = true;
  }
  removeList() {
    if (!this.showState) {
      this.myRef.current.classList.add("md:hidden");
      this.myRef.current.classList.remove(
        "md:flex-col",
        "md:justify-self-start",
        "md:text-start"
      );
      this.showState = true;
    }
  }

  showList() {
    if (this.showState) {
      this.myRef.current.classList.remove("md:hidden");
      this.myRef.current.classList.add(
        "md:flex-col",
        "md:justify-self-start",
        "md:text-start"
      );
      this.showState = false;
    } else {
      this.removeList();
    }
  }

  clickLink(id) {
    this.arrRef.forEach((element, index) => {
      if (index === id) {
        element.current.classList.add("border-l-sky-400");
        element.current.classList.remove("border-l-transparent");
      } else {
        element.current.classList.remove("border-l-sky-400");
        element.current.classList.add("border-l-transparent");
      }
    });
  }
  render() {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      if (scrolled > 70) {
        this.removeList();
        document.getElementById("myList").classList.remove("text-zinc-50");
        document.getElementById("myList").classList.add("text-zinc-800");
        document
          .getElementById("my-header")
          .classList.remove("bg-zinc-800", "border-b-sky-400");
        document.getElementById("my-header").classList.add("bg-zinc-50");
      } else {
        document.getElementById("myList").classList.remove("text-zinc-800");
        document.getElementById("myList").classList.add("text-zinc-50");
        document.getElementById("my-header").classList.remove("bg-zinc-50");
        document
          .getElementById("my-header")
          .classList.add("bg-zinc-800", "border-b-sky-400");
      }
      if(scrolled<541){
        this.clickLink(0);
      }
      else if(scrolled<1094){
        this.clickLink(1);
      }else if(scrolled<1522){
        this.clickLink(2);
      }else if(scrolled<2199){
        this.clickLink(3);
      }else{
        this.clickLink(4);
      }
    });
    const classLink =
      "transition-all duration-700 border-l-2 pl-1 md:mt-7  hover:border-l-sky-400";
    return (
      <div
        id="myList"
        ref={this.myRef}
        className="text-zinc-50 md:hidden controlList flex flex-row gap-x-10 justify-between  justify-self-end tn:justify-self-center tn:text-center"
      >
        <a
          href="#Home"
          ref={this.arrRef[0]}
          id="home"
          onClick={() => {
            this.showList();
            this.clickLink(0);
          }}
          className={classLink + " border-l-sky-400"}
        >
          HOME
        </a>
        <a
          href="#About"
          ref={this.arrRef[1]}
          id="about"
          onClick={() => {
            this.showList();
            this.clickLink(1);
          }}
          className={classLink + " border-l-transparent"}
        >
          ABOUT
        </a>
        <a
          href="#Experience"
          ref={this.arrRef[2]}
          id="experience"
          onClick={() => {
            this.showList();
            this.clickLink(2);
          }}
          className={classLink + " border-l-transparent"}
        >
          EXPERIENCE
        </a>
        <a
          href="#Work"
          ref={this.arrRef[3]}
          id="work"
          onClick={() => {
            this.showList();
            this.clickLink(3);
          }}
          className={classLink + " border-l-transparent"}
        >
          WORK
        </a>
        <a
          href="#Contact"
          ref={this.arrRef[4]}
          id="contact"
          onClick={() => {
            this.showList();
            this.clickLink(4);
          }}
          className={classLink + " border-l-transparent"}
        >
          CONTACT
        </a>
      </div>
    );
  }
}

export default ListSmall;
