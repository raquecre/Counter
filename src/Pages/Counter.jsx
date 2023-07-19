import { useState } from "react"

const Counter = () => {
    const [count, setCount]= useState(0)

    return(
        <div className="Counter flex">
            <h1>Contador</h1>

            <h4>{count}</h4>

        </div>
    )
}

export default Counter