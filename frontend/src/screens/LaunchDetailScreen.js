import React from 'react'
import PropTypes from 'prop-types'

const LaunchDetailScreen = ({ history, match }) => {
  const backToHome = () => {
    history.go(-1)
  }
  const id = match.params.id
  return (
        <div className='mt-8'>
            <p className='text-black'> LAUNCH DETAIL SCREEN {id}</p>
            <p onClick={backToHome} className='text-black'>Back screen</p>
        </div>
  )
}
LaunchDetailScreen.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}
export default LaunchDetailScreen
