import "./Score.css";

function Score({number, name, className}) {
    const number_className = `${className}-num`;
    const name_className = `${className}-name`;

    return (
        <>
            <div className={className}>
                <div className={number_className}>{number}</div>
                <div className={name_className}>{name}</div>
            </div>
        </>
    )
}

export default Score;