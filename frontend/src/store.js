import { configureStore } from '@reduxjs/toolkit'
import { userLoginReducer } from './reducers/userReducers'

const user = localStorage.getItem('userInfo')
const userInfoFromStorage = user ? JSON.parse(user) : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer

  },
  preloadedState: initialState

})

export default store
