import React from 'react'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return <div>
           {userInfo && <div className='flex'>
           <Link to='/home'>
        <img className='w-2/12 ml-32' src='/images/spaceLogo.png'/>
        </Link>
        <p className='ml-auto w-4/12 text-xl text-black underline'> Welcome {userInfo.name}</p>
        <p className='ml-auto mr-32 hover:text-red-700 cursor-pointer text-black text-lg' onClick={logoutHandler}>
       Logout
        </p>
        </div>
}
    </div>
}

export default Header
