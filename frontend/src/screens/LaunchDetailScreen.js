import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchData } from '../actions/launchActions'
import YouTube from 'react-youtube'

const LaunchDetailScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const launchData = useSelector(state => state.launchData)
  const { launchInfo } = launchData

  const [currData, setCurrData] = useState([])

  const opts = {
    height: '400',
    width: '800'
  }

  const backToHome = () => {
    history.go(-1)
  }
  useEffect(() => {
    if (userInfo) {
      if (!launchInfo || !launchInfo.length) {
        dispatch(fetchData())
      }
    } else {
      history.push('/')
    }
  }, [dispatch, history, userInfo, launchInfo])

  const id = match.params.id

  useEffect(() => {
    const currData = launchInfo?.filter(info => info.flight_number.toString() === id)
    currData && setCurrData(currData[0])
  }, [id, launchInfo])

  return (
        <div className='mt-8'>
          <p onClick={backToHome} className='cursor-pointer underline text-black'>Go Back</p>
          <div className='ml-32'>
          <YouTube videoId={currData?.links?.youtube_id} opts={opts} />;
          </div>
          <div className='text-white mt-8 text-lg'>
          <p> {new Date(currData.launch_date_utc).toString().slice(0, 15)}</p>
          <p> {currData.mission_name}</p>
          <p className='text-black' > {currData.details}</p>
          </div>

        </div>
  )
}
LaunchDetailScreen.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}
export default LaunchDetailScreen
