const Rest = (props) => {
    const { counter, setCounter } = props

    const restCounter = () => setCounter(counter < 1 ? counter -1 : counter )

    return(
        <button onClick={() => restCounter()}>
                -
        </button>
    )
}

export default Rest