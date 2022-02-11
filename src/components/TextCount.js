import React from "react";

const TextCount = ({inputText}) => {
  if(inputText.length < 5){
    return(
      <div>
      <p id="textbefore">Please enter atleast 5 characters to add a task</p> 
    </div> 
    )
  }
  else{
    return(
      <div>
        <p id="textafter">Character count: {inputText.length}</p> 
      </div> 
    )
  }
}

export default TextCount;