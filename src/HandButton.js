import HandIcon from "./HandIcon";

import "./HandButton.css";

function HandButton ({value, onClick, className}) {
    const handleClick = () => onClick(value);

    return (<button className={className} onClick={handleClick}><HandIcon value={value} className={className}/></button>);
}

export default HandButton;