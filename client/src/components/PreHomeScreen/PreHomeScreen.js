import React from 'react'
import './homeScreen.css'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <Link to='/Home'>
      <div>
        <div className='main'>
          <div className='first-content'>
            <img
              className='img-control'
              src='kpc-sponsors.jpg'
              alt='home screen one'
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
export default HomeScreen
