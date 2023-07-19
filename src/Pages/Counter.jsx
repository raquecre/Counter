import { useState } from "react"
import Rest from "../Components/Rest"
import Sum from "../Components/Sum"

const Counter = () => {
    const [count, setCount] = useState(0)


    return (
        <div className="counter m-5 p-3 border rounded w-50 border-primary">
            <h1>Contador</h1>
            <div className="counterItems">
                <Rest count={count} newCounter={() => setCount((state) => state > 0 ? state -1 : state )} />

                <h4>{count}</h4>

                <Sum count={count} newCounter={() => setCount((state) => state+1 )} />
            </div>

        </div>
    )
}

export default Counter