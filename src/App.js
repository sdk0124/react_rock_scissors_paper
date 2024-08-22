import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";
import HandIcon from "./HandIcon";
import { compareHand, getRandomNextHand } from "./support.js"

const INIT_HAND_VALUE = 'rock';
const INIT_SCORE_VALUE = 0;

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
  const [gameHistory, setGameHistory] = useState([]);
  const [myScore, setMyScore] = useState(INIT_SCORE_VALUE);
  const [otherScore, setOtherScore] = useState(INIT_SCORE_VALUE);

  const calculateScore = (result) => {
    if (result === '승리')
      setMyScore(myScore + 1);
    else if (result === '패배')
      setOtherScore(otherScore + 1);
  }

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = getRandomNextHand();
    const newHistory = getResult(nextHand, nextOtherHand);
  
    calculateScore(newHistory);
    setMyHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, newHistory]);
    // console.log(myHand, otherHand);
  };

  const handleClearClick = () => {
    setMyHand(INIT_HAND_VALUE);
    setOtherHand(INIT_HAND_VALUE);
    setMyScore(INIT_SCORE_VALUE);
    setOtherScore(INIT_SCORE_VALUE);
    setGameHistory([]);
  }

  return (
    <>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <h3>{getResult(myHand, otherHand)}</h3>
      <p>{myScore} : {otherScore}</p>
      <div>
        <HandIcon value={myHand}/>
        <span>VS</span>
        <HandIcon value={otherHand}/>
      </div>
      <p>승부 기록 : {gameHistory.join(', ')}</p>
      <div>
        <HandButton value='rock' onClick={handleButtonClick}/>
        <HandButton value='scissor' onClick={handleButtonClick}/>
        <HandButton value='paper' onClick={handleButtonClick}/>
      </div>
    </>
  );
}

export default App;