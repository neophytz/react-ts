import React, { useEffect } from 'react'
import { weather } from '../service/weather.service'

export const Home: React.FC<{theme: 'dark' | 'light'}> = ({theme}) => {

  const getweather = async () => {
    const _weather = await weather()
    console.log(_weather)
  }

  useEffect(() => {
    getweather()
  }, [])
  
  return (
    <div className='container'>

      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">New delhi</option>
        <option value="2">New york</option>
        <option value="3">Canada</option>
      </select>

      <div className="card mt-3" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
  )
}
