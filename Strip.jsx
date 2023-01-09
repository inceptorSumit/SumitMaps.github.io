import React from 'react';
import './Strip.css'

const Strip = () => {
  return (
    <div className="str" style={{height:"10vh"}}>
        <div style={{backgroundColor:"rgb(0,0,128,1)", fontWeight:"bold"}}>Users > 2,50,000</div>
        <div style={{backgroundColor:"rgb(0,0,128,0.95)", fontWeight:"bold"}}>Users > 2,00,000</div>
        <div style={{backgroundColor:"rgb(0,0,128,0.75)", fontWeight:"bold"}}>Users > 1,50,000</div>
        <div style={{backgroundColor:"rgb(0,0,128,0.6)", fontWeight:"bold"}}>Users > 1,00,000</div>
        <div style={{backgroundColor:"rgb(0,0,128,0.5)", fontWeight:"bold"}}>Users > 50,000</div>
        <div style={{backgroundColor:"rgb(0,0,128,0.4)", fontWeight:"bold"}}>Users > 20,000</div>

    </div>
  )
}

export default Strip