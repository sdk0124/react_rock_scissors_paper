import Hand from "./Hand";

import "./Box.css";

function Box ({myHandValue, otherHandValue, History, Result}) {
    let meWin = 0;
    let otherWin = 0;
    if (Result === '승리')
        meWin = 1;
    else if (Result === '패배')
        otherWin = 1;

    return (
        <>
            <div className='Box-inner'>
                <div className='App-hands'>
                    <Hand value={myHandValue} className='Hand' isWin={meWin}/>
                    <div className='App-versus'>VS</div>
                    <Hand value={otherHandValue} className='Hand' isWin={otherWin}/>
                </div>
                <div className='App-history'>
                    <h2>승부 기록</h2>
                    <p>{History.join(', ')}</p>
                </div>
            </div>
        </>
    )
}

export default Box;