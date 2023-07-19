

const Rest = (props) => {
    const { counter, newCounter } = props

    const restCounter = () => newCounter(counter < 1 ? +counter -1 : counter );

    return(
        <button onClick={() => restCounter()}>
                -
        </button>
    )
}

export default Rest