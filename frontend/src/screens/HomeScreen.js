import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { fetchData } from '../actions/launchActions'
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

  const launchData = useSelector(state => state.launchData)
  const { launchInfo } = launchData

  useEffect(() => {
    if (userInfo) {
      if (!launchInfo || !launchInfo.length) {
        dispatch(fetchData())
      }
    } else {
      history.push('/')
    }
  }, [dispatch, history, userInfo, launchInfo])
  return <div>
        <h1 className='text-red-800'>HOME SCREEN </h1>
        <p className='cursor-pointer text-red-800' onClick={logoutHandler}> Logout</p>
    </div>
}

HomeScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default HomeScreen
