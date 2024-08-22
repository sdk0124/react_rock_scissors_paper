import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";
import HandIcon from "./HandIcon";
import { compareHand, getRandomNextHand } from "./support.js"

const INIT_HAND_VALUE = 'rock';

const getResult = (me, other) => {
  if (compareHand(me, other) > 0)
    return '승리';
  else if (compareHand(me, other) < 0)
    return '패배';
  else 
    return '무승부';
}

function App() {
  const [myHand, setMyHand] = useState(INIT_HAND_VALUE);
  const [otherHand, setOtherHand] = useState(INIT_HAND_VALUE);
  
  const handleButtonClick = (value) => {
    setMyHand(value);
    setOtherHand(getRandomNextHand());
    // console.log(myHand, otherHand);
  };

  const handleClearClick = () => {
    setMyHand(INIT_HAND_VALUE);
    setOtherHand(INIT_HAND_VALUE);
  }

  return (
    <>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <h3>{getResult(myHand, otherHand)}</h3>
      <div>
        <HandIcon value={myHand}/>
        <span>VS</span>
        <HandIcon value={otherHand}/>
      </div>
      <div>
        <HandButton value='rock' onClick={handleButtonClick}/>
        <HandButton value='scissor' onClick={handleButtonClick}/>
        <HandButton value='paper' onClick={handleButtonClick}/>
      </div>
    </>
  );
}

export default App;