import React from 'react'
import  ReactDOM  from 'react-dom';
import CardSlid from './CardSlid';


function Slid() {
  return ReactDOM.createPortal(
    <CardSlid/>,
    document.getElementById('slid-root')
  )
}

export default Slid