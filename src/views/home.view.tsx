import React from 'react'
import { Dictaphone } from '../components/Dictaphone'

export const Home: React.FC<{theme: 'dark' | 'light'}> = ({theme}) => {  
  return (
    <div className='container'>
      <Dictaphone />
    </div>
  )
}
