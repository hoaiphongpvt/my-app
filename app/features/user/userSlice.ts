import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullname: '',
  email: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { fullname, email } = action.payload
      state.fullname = fullname
      state.email = email
    },

    logout: (state) => {
      state.fullname = ''
      state.email = ''
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
