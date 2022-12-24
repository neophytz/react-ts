import React, { useEffect, useMemo, useState } from 'react'

export const AdvanceUseEffect = () => {
    const [count, setCount] = useState(0)
    const [config, setConfig] = useState({name: '', selected: false})

    // advance method of memory control in react. 
    const _config = useMemo(() => ({
        ...config
    }), [config.name, config.selected])

    // arrow function.
    const handleBtnClick = () => {
        setCount(count => count+ 1);
    }

    const handleSelectClick = () => {
        setConfig(_oldConfig => ({
            ..._oldConfig,
            selected: true
        }));
    }

    console.log('component is re rendered')

    const handleInputChange = (event: any) => {
        // setConfig(_oldValue => {
        //     return {
        //         selected: _oldValue.selected,
        //         name: event.target.value
        //     }    
        // })
        
        // this is same as the code above.
        setConfig(_config => ({
            ..._config,
            name: event.target.value
        }))
    }

    // Either when component is born or after the dependency is chnaged.
    useEffect(() => {
      console.log('clicked')
      document.title = 'music ' + count;
    }, [count])


    // simple method of handling non-primitive dependency in useEffect.
    useEffect(() => {
        console.log('effect fired 1')
    }, [config.name, config.selected])


    // Advance method.
    useEffect(() => {
        console.log('effect fired')
    }, [_config])

    // Primitive - boolean, string, number (int), float, null, undefined, char, 
    // Non-Primitive - objects, arrays.

    // == 
    // in case of primitive = value stored in the memory.
    // in case of non-primitive = refrence of the value is checked.
    
    return (
        <div className='container bg-light p-3'>
            <div className='mb-4 border-bottom pb-2'>
                <div className='p-4'>
                    {
                        count
                    }
                </div>
                <button className='btn btn-primary' onClick={handleBtnClick}>click</button>
            </div>

            <div className=''>
                {JSON.stringify(config)}
                <br />
                <input type="text" onChange={handleInputChange} />
                <br />
                <button className='btn mt-3 btn-primary' onClick={handleSelectClick}>
                    clicked
                </button>
            </div>
        </div>
    )
}
