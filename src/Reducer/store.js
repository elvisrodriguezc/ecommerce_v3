import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Slices/loginSlice'
import prodSlice from './Slices/prodSlice'

export default configureStore({
    reducer: {
        login: loginSlice,
        ecommerce: prodSlice
    }
})



