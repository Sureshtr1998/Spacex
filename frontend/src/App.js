import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'
import LaunchDetailScreen from './screens/LaunchDetailScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
   <main className=''>
   <div className="context">
     <Header/>
     <hr className='hrHeader'/>
      <Container>
      <Route path = '/' component = {LoginScreen} exact />
      <Route path = '/register' component = {RegisterScreen} />
      <Route path = '/launch/:id' component = {LaunchDetailScreen} />
      <Route path = '/home' component = {HomeScreen} exact/>
      <Route path = '/launch' component = {HomeScreen} exact/>
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
