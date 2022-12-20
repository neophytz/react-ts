import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

export const Hook2 = () => {
    const [data, setData] = useState("");
    const [masti, setMasti] = useState(0); // event | zindagi ka koi major event!!!

    /**
     * componentDidMount - birth
     * live - componentDidUpdate
     * componentDidUnmount - death
     */

    // ! ALWAYS GIVEN DEPENDECNY ARRAY, EVEN IF IT'S EMPTY.
    /*
      first argument - call back function!!
      second argument is dependency array.!!
    */

    useEffect(() => {
        console.log('[ANNOUCEMENT] - Aaj mei krke aaya');
    }, [masti])

    // when any value in depedency array is changed, then callback is fired.
    // when value of 'msti' is being changed then callback is fired.

    // if depedency array does not contain any value. (or length = 0) then 
    // empty depdency array  means, it will only run at the time of birth.
    useEffect(() => {
        console.log('I\'m paida hoing...')
    }, [])

    // when we want to make an API call, after the component is initialized.

    // birth
    //   -> function call kreai
    // change - wait...
    //   -> function call krni h
    // death
    //   -> function call krni...

    // in these cases we use useEffect.
    useEffect(() => {
      // birth ka action
      console.log('birth ka action.')
    
      return () => {
          // death ka action.
          // unmount p fire hoga.
          console.log('death ka action.')
      }
    }, [masti])

    useLayoutEffect(() => {
        console.log('[layout effect] - birth ka action.')
    
        return () => {
            console.log('[layout effect] - death ka action.')
        };

    }, [masti])


    const apiCall = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(res.data[0].email)
        console.log('data print done...', res.data)
    }

    useEffect(() => {
      apiCall()
    }, []);

    return (
        <div>
          Hello World
          <h1>{data}</h1>
          <h1>{masti}</h1>
          <button className="mx-3 btn btn-primary border-0 rounded" onClick={() => setMasti(masti + 1)}>
            Do masti
          </button>

          <button className="mx-3 btn btn-primary border-0 rounded" onClick={() => setData(data => data + "a")}>
            Add A
          </button>

        </div>
      );
}
