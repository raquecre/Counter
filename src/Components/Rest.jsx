

const Rest = (props) => {
    const { counter, newCounter } = props

    const restCounter = () => newCounter(counter < 1 ? +counter -1 : counter );

    return(
        <button className="btn bg-danger display-3 font-weight-bold " onClick={() => restCounter()}>
                -
        </button>
    )
}

export default Rest