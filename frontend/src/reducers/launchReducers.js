import {
  SPACEX_DATA_FAIL,
  SPACEX_DATA_REQUEST, SPACEX_DATA_SUCCESS
} from '../constants/launchConstants'
export const launchDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SPACEX_DATA_REQUEST:
      return { loading: true }

    case SPACEX_DATA_SUCCESS:
      return { loading: false, launchInfo: action.payload }

    case SPACEX_DATA_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
