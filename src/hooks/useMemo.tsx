import React, { useState, useMemo, useEffect, memo } from "react";

const Hook3 = (): JSX.Element => {
    const [count, setCount] = useState(0);
    const [music, setMusic] = useState("gana")
    // this value will always get re-initialized when the component re-renders.
    // const calculation = expensiveCalculation(count)
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    useEffect(() => {
      console.log('birth - Something happened')
    
      return () => {
        console.log('death - Something happeded')
      }
    }, [music])
    
    // this is what happnes behind the scenes in case of use memo.
    // const [_calculation, setCalculation] = useState(0)
    // useEffect(() => {
    //     setCalculation(expensiveCalculation(count))
    // }, [count])
    
    console.log('amazing render')
    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <div>
            <input type="text" className="border rounded-pill px-3 py-1" value={music} onChange={(e) => setMusic(e.target.value)} />
            <hr />
            <div>
                Count: {count}
                <button className="btn btn-primary mx-3" onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 10000; i++) {
        num += 1;
    }
    return num;
};

export default memo(Hook3)