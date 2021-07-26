import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";

import sampleReducer from './slices/sample'
import saga from 'sagas'

let sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: combineReducers({
    sampleData: sampleReducer,
  }),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch