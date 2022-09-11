import {
  SPACEX_DATA_FILTER
} from '../constants/filterConstants'

export const applyFilter = (prodName = null, from = null, to = null, upcoming = true, past = true) => async (dispatch, getState) => {
  const { launchData: { launchInfo } } = getState()
  const filteredList = launchInfo?.filter(launch => {
    if (launch.mission_name.toLowerCase().includes(prodName.toLowerCase())) {
      if (upcoming === launch.upcoming || past === !launch.upcoming) {
        if (from && to) {
          const fromDate = Date.parse(from)
          const toDate = Date.parse(to)
          const missionDate = Date.parse(launch.launch_date_utc)
          if ((missionDate <= toDate && missionDate >= fromDate)) {
            return true
          }
        } else {
          return true
        }
      }
    }
    return false
  }

  )
  dispatch({
    type: SPACEX_DATA_FILTER,
    payload: filteredList
  })
}
