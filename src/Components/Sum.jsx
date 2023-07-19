


const Sum = (props) => {
    const { counter, newCounter } = props

    const sumCounter = () => newCounter(+counter + 1)


    return (
        <button className="btn bg-success display-3 font-weight-bold " onClick={sumCounter}>
            +
        </button>
    )
}

export default Sum