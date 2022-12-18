import React from 'react'
import { Hook2 } from './hooks/useEffect'
import { Hook3 } from './hooks/useMemo'
// import { Hook1 } from './hooks/useState'
// import { TodosView } from './views/todos.view'
// import { Header } from './components/header'
// import { Hook2 } from './hooks/useEffect'
// import { Hook1 } from './hooks/useState'

export const App = () => {
  // implcit type definition - when we dont define the type but program interprets it from the initialzed value. 
  // let age = 0; 

  // explicit type defnition - when we define it.
  // let name: string;

  // const calculateAge = (dob: Date): number => {
  //   const d2 = new Date();
  //   var diff = d2.getTime() - dob.getTime();
  //   return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  // }

  // age = calculateAge(new Date(1978, 10, 3))

  return (
    <div className='container py-5'>
      {/* <Header /> */}
      <div className='my-5'>
        {/* <Hook1 /> */}
      </div>
      {/* <Hook2 /> */}
      <Hook3 />
      {/* <TodosView /> */}
    </div>
  )
}
