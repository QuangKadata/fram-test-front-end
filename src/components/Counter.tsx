import * as React from 'react'

function Counter() {
    ///Using State has a default value = 0 
    const [counter, setCounter] = React.useState<number>(0)

    return (
        <div className='card Card-Table' style={{ padding: '10px',borderRadius: '6px',marginTop: '10px' }}>
            <div className='container'>
                <h1 className='text-center' id='title'>
                    Counter
                </h1>
                <div>
                    <p className='counter-label' style={{ fontSize: '72px', textAlign: 'center' }}>
                   <p  style={{ color: 'red'}}>{counter}</p>
                    </p>
                    <div className='counter-control' style={{ justifyContent: 'center', display: 'flex',padding: '10px' }}>
                        <button className='btn btn-success mr-2' style={{width: '100px'}} onClick={() => setCounter(counter + 1)}>
                            Increase
                        </button>
                        <button className='btn btn-outline-secondary' style={{width: '100px'}}  onClick={() => setCounter(0)}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter
