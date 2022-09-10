import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import PropTypes from 'prop-types'

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const { userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submithandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return <FormContainer>
            <h1> Sign Up</h1>
            {/* if you domn't have to display anything in else comndition at that time use && */}
            {message && <Message variant='danger'> {message}</Message> }
            <Form onSubmit={submithandler}>

            <Form.Group controlId='name'>
                    <Form.Label className='text-black mt-6'>Name</Form.Label>
                    <Form.Control type='name'
                    placeholder='Enter Name'
                    value={name}
                    onChange={e => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label className='text-black mt-6'>Email Address</Form.Label>
                    <Form.Control type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label className='text-black mt-6'>Password</Form.Label>
                    <Form.Control type='Password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label className='text-black mt-6'>Confirm Password</Form.Label>
                    <Form.Control type='Password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button className='mt-8' type='submit' variant='primary'>
                    Register
                </Button>
            </Form>
            <Row className='text-black py-3'>
                <Col>
                    Have an Account? <Link to={redirect
                  ? `/?redirect=${redirect}`
                  : '/'
                    }>Login</Link>
                </Col>
            </Row>
         </FormContainer>
}

RegisterScreen.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default RegisterScreen
