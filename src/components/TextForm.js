import React, { useState } from "react";

export default function TextForm(props) {
  const darkStyle = {
    backgroundColor: `${props.mode === "dark" ? "gray" : "white"}`,
    color: `${props.mode === "dark" ? "white" : "black"}`,
    border: `${props.mode === "dark" ? "2px solid white" : "2px solid black"}`,
  };

  const darkTextStyle = {
    color: `${props.mode === "dark" ? "white" : "black"}`,
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Upper case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lower case", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCapitalize = () => {
    let newText = text.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
    props.showAlert("First letter of each word capitalized", "success");
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  };

  

  const handleToggleCase = () => {
    let newText = text
      .split("")
      .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
      .join("");
    setText(newText);
    props.showAlert("Text case toggled", "success");
  };



  const [text, setText] = useState("Enter the text here");

  return (
    <>
      <div className="container my-4">
        <h1 style={darkTextStyle}>{props.heading + ": Enter Your Text below"}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={darkStyle} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">
          Convert TO UpperCase
        </button>
        <button onClick={handleLoClick} className="btn btn-primary m-2">
          Convert TO LowerCase
        </button>
        <button onClick={handleClearClick} className="btn btn-primary m-2">
          Clear
        </button>
        <button onClick={handleCopy} className="btn btn-primary m-2">
          Copy
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary m-2">
          Remove Extra Spaces
        </button>
        <button onClick={handleCapitalize} className="btn btn-primary m-2">
          Capitalize Words
        </button>
        <button onClick={handleReverse} className="btn btn-primary m-2">
          Reverse Text
        </button>
        
        <button onClick={handleToggleCase} className="btn btn-primary m-2">
          Toggle Case
        </button>
        
      </div>
      <div className="container my-4">
        <h1 style={darkTextStyle}>Your Text Summary</h1>
        <p style={darkTextStyle}>{text.split(" ").filter((element) => element.length !== 0).length} Words and {text.length} Characters</p>
        <p style={darkTextStyle}>{text.split(" ").length * 0.008} Minutes read</p>
        <h2 style={darkTextStyle}>Preview</h2>
        <p style={darkTextStyle}>{text.length > 0 ? text : "Enter Your Text to preview it here"}</p>
      </div>
    </>
  );
}
