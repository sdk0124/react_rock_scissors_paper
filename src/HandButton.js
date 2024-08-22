import HandIcon from "./HandIcon";

function HandButton ({value, onClick}) {
    const handleOnClick = () => onClick(value);

    return (
        <>
            <button onClick={handleOnClick}>
                <HandIcon value={value} />
            </button>
        </>
    )
}

export default HandButton;