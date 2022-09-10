import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import PropTypes from 'prop-types'

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (userInfo) {
      console.log('DISPLAY LAUNCHES')
    //  dispatch(listUsers())
    } else {
      history.push('/')
    }
  }, [dispatch, history, userInfo])
  return <div>
        <h1 className='text-red-800'>HOME SCREEN </h1>
        <p className='cursor-pointer text-red-800' onClick={logoutHandler}> Logout</p>
    </div>
}

HomeScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default HomeScreen
