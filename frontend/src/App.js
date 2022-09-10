import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
   <main className=''>
   <div className="context">
      <Container>
      <Route path = '/' component = {LoginScreen} exact />
      <Route path = '/register' component = {RegisterScreen} />
      <Route path = '/home' component = {HomeScreen} exact/>
      </Container>
            </div>

         <div className="area" >
         <ul className="circles">
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
         </ul>
   </div>
   </main>
    </Router>
  )
}

export default App
