import React, { useState } from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const darkStyle = {
    backgroundColor: `${props.mode === "dark"?"gray":"white"}`,
    color: `${props.mode === "dark"?"white":"black"}`,
    border: `${props.mode === "dark"?"2px solid white":"2px solid black"}`
  }
  // console.log(useState("Enter the text here2"))

  const darkTextStyle = {
    color: `${props.mode === "dark"?"white":"black"}`
  }

  const handleUpClick = () => {
    console.log("The button is clicked");
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert(" Text is converted to Upper case","success")
  };

  const handleLoClick = () => {
    console.log("The button is clicked");
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert(" Text is converted to Lower case","success")
  };

  const handleClearClick = () => {
    console.log("The button is clicked");
    let newText = ''
    setText(newText);
    props.showAlert(" Text has been cleared","success")
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  };

  const handleCopy = () =>{
    console.log("I am copy")
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert(" Text has been copied to clipboard","success")
  }

const handleExtraSpaces = () =>{
  console.log("ExtraSPaces removed")
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
}


  const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className="container my-4">
        <h1 style= {darkTextStyle}>{props.heading+ ": Enter Your Text bellow" } </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {darkStyle} id="myBox" rows="8"></textarea>

        </div>
        <button onClick={handleUpClick} className="btn btn-primary">Convert TO UpperCase</button>
        <button onClick={handleLoClick} className="btn btn-primary mx-2">Convert TO LowerCase</button>
        <button onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
        <button onClick={handleCopy} className="btn btn-primary mx-2">Copy</button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-2">Rm Extra Spaces</button>
    </div>
    <div className="container my-4">
        <h1 style={darkTextStyle}>Your Text Summary</h1>
        <p style={darkTextStyle}>{text.split(" ").length} Words and {text.length} Characters</p>
        <p style={darkTextStyle}>{text.split(" ").length* 0.008} Minutes read</p>
        <h2 style={darkTextStyle}>Preview</h2>
        <p style={darkTextStyle}>{text.length>0?text:"Enter Your Text to preview it here"}</p>
    </div>
    </>
  );
}
