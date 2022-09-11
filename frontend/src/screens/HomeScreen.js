import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../actions/launchActions'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import LaunchData from '../components/LaunchData'

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch()

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
  return <div >
        <Row className='mt-8 launches'>
            {launchInfo?.map((launch, index) => {
              return (
                <Col key={launch.flight_number + '_' + index} sm={12} md ={6} lg={4} xl={3}>
                <LaunchData launch={launch}/>
                </Col>
              )
            })}
        </Row>
    </div>
}

HomeScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default HomeScreen
