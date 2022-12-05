import React, { useState } from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = () => {
    console.log("uppercase was clicked " + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!", "success")

  }
  const handleClClick = () => {
    console.log("uppercase was clicked " + text)
    let newText = ""
    setText(newText)
  }
  const handleReverse = () => {
    let strarr = text.split("")
    strarr = strarr.reverse()
    let newText = strarr.join("")
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log("On change")
    setText(event.target.value)
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied!", "success")

  }

  const [text, setText] = useState("")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClClick}>
          Clear Text{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleReverse}>
          Revese the Text{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy the Text{" "}
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something  in the textbox above to previews here"}
        </p>
      </div>
    </>
  )
}
