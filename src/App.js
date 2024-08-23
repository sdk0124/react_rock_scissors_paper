import { useState } from "react";
import HandButton from "./HandButton";
import Score from "./Score.js";
import Box from "./Box.js";
import { compareHand, getRandomNextHand } from "./support.js"

import reset_img from "./assets/ic-reset.svg";

import "./App.css";

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
      <div className='App'>
        <h1 className='App-heading'>가위바위보</h1>
        <img className='App-reset' src={reset_img} alt='초기화' onClick={handleClearClick}/>
        <div className='App-scores'>
          <Score number={myScore} name='나' className='Score'/>
          <div className='App-versus'>:</div>
          <Score number={otherScore} name='상대' className='Score'/>
        </div>
        <div className='Box App-box'>
          <Box myHandValue={myHand} otherHandValue={otherHand} History={gameHistory} Result={getResult(myHand, otherHand)}/>
        </div>        
        <div>
          <HandButton className='HandButton' value='rock' onClick={handleButtonClick}/>
          <HandButton className='HandButton' value='scissor' onClick={handleButtonClick}/>
          <HandButton className='HandButton' value='paper' onClick={handleButtonClick}/>
        </div>
      </div>
    </>
  );
}

export default App;