import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    const internval = setInterval(() => {
      console.log('done')
      console.log('done1')
      console.log('done2')
    }, 1000)
  
    return () => {
      // clear interval to avoid memory fuck up!
      clearInterval(internval)
    }
  }, [])
  
  return (
    <div>About</div>
  )
}

export default About;