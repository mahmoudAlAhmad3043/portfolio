import React, { Component } from "react";

class FooterContains extends Component {
  render() {
    let sectionStlye = "pb-4 text-start";
    let h1Style = "text-zinc-900 font-bold text-lg";
    let linkStyle = "text-gray-500 hover:text-gray-600";
    return (
      <div className="col-span-2 grid grid-cols-3 lg:grid-cols-1 md:pt-8">
        <div className={sectionStlye}>
          <h1 className={h1Style}>Location</h1>
          <a href="#Home" className={linkStyle}>Aleppo, Syria</a>
        </div>
        <div className={sectionStlye}>
          <h1 className={h1Style}>Phone</h1>
          <a href="#Home" className={linkStyle}>+963957950415</a>
        </div>
        <div className={sectionStlye}>
          <h1 className={h1Style}>Email</h1>
          <a href="http://mahmoudahmad3043@gmail.com" target="_blanck" className={linkStyle}>mahmoudahmad3043@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default FooterContains;
