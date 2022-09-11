import {
  SPACEX_DATA_FILTER
} from '../constants/filterConstants'

export const filterDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SPACEX_DATA_FILTER:
      return { launchList: action.payload }

    default:
      return state
  }
}
