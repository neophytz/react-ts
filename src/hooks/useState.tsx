import React, { useState } from 'react'

export const Hook1 = () => {
    // this is hook.
    // first value - is variable name | second value is setter function that sets the variable.
    // argument passed to useState is default value.
    const [variable, setVariable] = useState("nothing");

    //! IMPORTANT NOTE.
    // when you want to update state based on previous value, never directly compute that new value based on the same state varibale.
    const [count, setCount] = useState<number>(0)

    const onChange = (event: any) => {
        // console.log(event); // event is a browser event.
        const newValue = event.target.value;
        setVariable(newValue);
    };

    const decrement = () => setCount(_count => _count - 1)

    return (
        <div className='d-flex gap-4 flex-wrap'>
            <div className='card border-0 rounded shadow px-4 py-3' style={{ maxWidth: 560 }}>
                <h4>Use State hook.</h4>
                <p className='lead fs-6'>
                    When you want to update the state variable and re-render the compoent.
                </p>

                <hr />

                <p>State variable - <span className='fw-bold'>{variable}</span></p>

                <input className='rounded py-2 px-3 border' placeholder="enter something..." onChange={onChange} />
            </div>

            {/* example 2 */}
            <div className='card border-0 rounded shadow px-4 py-3' style={{ maxWidth: 560 }}>
                <h4>Counter application</h4>

                <div className='bg-dark text-center text-white rounded p-5'>
                    <h3 className='display-5'>{count}</h3>
                </div>

                <hr />
                <div className='d-flex gap-4 justify-content-center'>
                    <button onClick={() => decrement()} className='btn fs-4 px-3 btn-outline border'>-</button>
                    <button onClick={() => setCount(_count => _count + 1)} className='btn fs-4 px-3 btn-outline btn-dark'>+</button>
                </div>
                <button className='btn btn-danger btn-block rounded shadow-none my-3' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}
