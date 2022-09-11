import { configureStore } from '@reduxjs/toolkit'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { launchDataReducer } from './reducers/launchReducers'
import { filterDataReducer } from './reducers/filterReducers'

const user = localStorage.getItem('userInfo')
const userInfoFromStorage = user ? JSON.parse(user) : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    launchData: launchDataReducer,
    userRegister: userRegisterReducer,
    filterData: filterDataReducer
  },
  preloadedState: initialState

})

export default store
