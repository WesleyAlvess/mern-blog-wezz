import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: false,
    errorMessage: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
            state.errorMessage = null
            state.successMessage = null
        },
        signInSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
            state.successMessage = "Login bem-sucedido"
            state.errorMessage = null

        },
        signInFailure: (state, action) => {
            state.loading = false
            state.errorMessage = action.payload
            state.successMessage = null
        },
    }
})

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions


export default userSlice.reducer