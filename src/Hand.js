import HandIcon from "./HandIcon";

import "./Hand.css";

function Hand ({value, className, isWin}) {
    let classNames = 'Hand';
    if (isWin === 1)
        classNames = 'Hand Winner';

    return (
        <>
            <div className={classNames}>
                <HandIcon value={value} className='Hand'/>
            </div>            
        </>
    )
}

export default Hand;