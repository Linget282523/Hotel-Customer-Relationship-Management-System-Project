import React from 'react'
import { Login } from '../components/Login'
import { Link } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <header>
        <div className='logo'>
            <img src="./../FE-2-design_favicon" alt="" />
        </div>
        <div className='login-button'>
          <button><Link to='/login'/>Log out</button>
        </div>
      </header>
      <div className='content'>

      </div>

    </div>
  )
}

export default MainLayout
