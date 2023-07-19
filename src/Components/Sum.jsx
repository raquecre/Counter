const Sum = (props) => {
    const { counter, setCounter } = props

    const sumCounter = () => setCounter(counter + 1)


    return (
        <button onClick={() => sumCounter()}>
            +
        </button>
    )
}

export default Sum