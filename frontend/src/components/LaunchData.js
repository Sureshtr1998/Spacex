import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LaunchData = ({ launch }) => {
  return (
      <div>
       <Link to={`/launch/${launch.flight_number}`}>
        <div style={{ height: '45vh' }} className='my-3 p-3 rounded'>
        <div className='containerCard'>
        <div className="column">
      <div className="card">
        <div className="content">

            <div className='front imagePatch'>
            {launch.links.mission_patch ? <img src={launch.links.mission_patch}/> : <img src='/images/spacex.png'/> }
            </div>

            <div className=" back from-bottom">
            <div className='text-white text-lg mt-4'>
                <img className='contentLogo' src='/images/spaceLogo.png'/>
                <div className='mt-8'>
            <p> Rocket Type: {launch.rocket?.rocket_type}</p>
            <p> Rocket Name: {launch.rocket?.rocket_name}</p>
            <p> Flight Number: {launch?.flight_number}</p>
            <p> Launch Year: {launch.launch_year}</p>
            <p> Launch: {launch.launch_success === null ? 'N/A' : launch.launch_success ? 'Success' : 'Fail'}</p>
            </div>
            </div>
            </div>

            </div>
            </div>
            </div>
            </div>

            </div>
            </Link>

            <div className='ml-4 text-white text-lg'>
        <p> {launch.mission_name}</p>
        <p> {new Date(launch.launch_date_utc).toString().slice(0, 15)}</p>
        </div>

        </div>
  )
}
LaunchData.propTypes = {
  launch: PropTypes.object.isRequired
}
export default LaunchData
