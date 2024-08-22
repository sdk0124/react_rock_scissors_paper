// import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";

function App() {
  const handleOnClick = (value) => console.log(value);
  const handleClearClick = () => console.log('초기화');
  
  return (
    <>
      <h1>안녕 리액트!</h1>
      <Button onClick={handleClearClick}>처음부터</Button>
      <HandButton value="rock" onClick={handleOnClick}/>
      <HandButton value="scissor" onClick={handleOnClick}/>
      <HandButton value="paper" onClick={handleOnClick}/>
    </>
  );
}

export default App;