function PinkButton({title, clickHandler}) {
    return (
        <button className='button pink' onClick = {clickHandler}>{title}</button>
    )
}

export default PinkButton