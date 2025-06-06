import { configureStore, combineReducers } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store