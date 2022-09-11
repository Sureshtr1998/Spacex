import React, { useState } from 'react'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const Header = () => {
  const dispatch = useDispatch()

  const [val, setVal] = useState('')
  const [upcoming, setUpcoming] = useState(true)
  const [past, setPast] = useState(true)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = e.target.value
    setVal(keyword)
  }

  const upcomingAction = () => {
    const currVal = !upcoming
    setUpcoming(currVal)
  }

  const pastAction = () => {
    const currVal = !past
    setPast(currVal)
  }
  const fromDate = (e) => {
    setFrom(e.target.value)
  }
  const toDate = (e) => {
    setTo(e.target.value)
  }

  const logoutHandler = () => {
    dispatch(logout())
  }
  return <div>
           {userInfo && <div className='flex'>
           {/* <Link className='ml-32 w-1/12' to='/home'>
        <img src='/images/spaceLogo.png'/>
        </Link> */}
        <p className='ml-16 mt-2 text-xs text-black underline'> Welcome {userInfo.name}</p>
        <div>
        <Form className='flex ml-auto' inline="true">
        <Form.Control type='text' value={val} onChange={e => submitHandler(e)} placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'>
        </Form.Control>
        <Form.Control type='date' value={from} onChange={e => fromDate(e)} placeholder='From: DD-Jan-YYYY'
        className='mr-sm-2 ml-sm-5'>
        </Form.Control>
        <Form.Control type='date' value={to} onChange={e => toDate(e)} placeholder='To: DD-Jan-YYYY'
        className='mr-sm-2 ml-sm-5'>
        </Form.Control>
        <div className='ml-12 text-black'>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value={upcoming} onChange={ upcomingAction} id="upcoming" checked={upcoming}/>
  <label className="form-check-label" htmlFor="upcoming">
    Upcoming
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value={past} onChange={pastAction} id="pastLaunches" checked={past}/>
  <label className="form-check-label" htmlFor="pastLaunches">
    Past&nbsp;Launches
  </label>
</div>
</div>
    </Form>
        </div>
        <button type="button" onClick={logoutHandler} className="ml-auto btn-sm mr-16 btn btn-danger">Sign Out</button>
        </div>
}
    </div>
}

export default Header
