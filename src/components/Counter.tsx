import * as React from 'react'

function Counter() {
    const [counter, setCounter] = React.useState<number>(0)

    return (
        <div className='card' style={{padding: '20px',marginTop: '10px',marginBottom: '10px'}}>
            <div className='App'>
                <h1>Result: <b style={{color: 'red'}}>{counter}</b></h1>
                <button className="btn btn-success mr-2" onClick={() => setCounter(counter + 1)}>+</button>
                <button className="btn btn-outline-secondary" onClick={() => setCounter(0)}>Reset</button>
            </div>
        </div>
    )
}
export default Counter
