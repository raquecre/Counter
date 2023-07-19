import { useState } from "react"
import Rest from "../Components/Rest"
import Sum from "../Components/Sum"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <h1>Contador</h1>
            <div className="counterItems">
                <Rest count={count} setCount={setCount}  />
                <h4>{count}</h4>
                <Sum count={count} setCount={setCount}  />
            </div>

        </div>
    )
}

export default Counter