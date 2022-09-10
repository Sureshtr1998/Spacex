import axios from 'axios'
import {
  SPACEX_DATA_FAIL,
  SPACEX_DATA_REQUEST, SPACEX_DATA_SUCCESS
} from '../constants/launchConstants'

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({
      type: SPACEX_DATA_REQUEST
    })

    const { data } = await axios.get('https://api.spacexdata.com/v3/launches')

    dispatch({
      type: SPACEX_DATA_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: SPACEX_DATA_FAIL,
      payload: error.response.data && error.response.data
    })
  }
}
