import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
 username: "",
 password: "",
}

export const authSlice = createSlice({
 name: 'auth',
 initialState: initialStateValue,
 reducers: {
  getUserName: (state, action) => {
   state.username = action.payload
  },
  getPassword: (state, action) => {
    state.password = action.payload
   },
 },
})

// Action creators are generated for each case reducer function
export const { getUserName , getPassword } = authSlice.actions

export default authSlice.reducer