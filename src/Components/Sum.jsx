


const Sum = (props) => {
    const { counter, newCounter } = props

    const sumCounter = () => newCounter(+counter + 1)


    return (
        <button onClick={sumCounter}>
            +
        </button>
    )
}

export default Sum