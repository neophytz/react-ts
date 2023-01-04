import { useCallback, useState } from "react";

export const Blog = () => {

    const [count, setCount] = useState(0);
  
    const _increment = useCallback(() => {
      setCount((c) => c + 1);    
    }, []);
  
    return (
      <div>
        <div className='container'>
          <div>
            Count: {count}
          </div>
          <button className='btn btn-primary' onClick={_increment}>+</button>
        </div>
      </div>
    );
  }