import * as React from "react";


function Counter() {
    const [counter, setCounter] = React.useState<number>(0)

    return (
        <div className="App">
     <h1>Result: { counter }</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
    )
}
export default Counter;