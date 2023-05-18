function OliveButton({title, clickHandler}) {
    return (
        <button className='button olive' onClick={clickHandler}>{title}</button>
    )
}

export default OliveButton