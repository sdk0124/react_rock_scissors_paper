import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

import "./HandIcon.css";

const Img = {
    rock : rockImg,
    scissor : scissorImg,
    paper : paperImg
};

function HandIcon({value, className, isWin}) {
    const imgClassName = (isWin === 1) ? `${className}-icon Winner` : `${className}-icon`;

    return (
        <>
            <img className={imgClassName} src={Img[value]} alt={value}/>
        </>
    );
}

export default HandIcon;