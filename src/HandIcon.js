import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const Img = {
    rock : rockImg,
    scissor : scissorImg,
    paper : paperImg
};

function HandIcon({value}) {
    return (<img src={Img[value]} alt={value}/>);
}

export default HandIcon;