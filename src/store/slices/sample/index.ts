import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'


// Define a type for the slice state
interface SampleState {
  value: number,
  apiResponse: any
}

// Define the initial state using that type
const initialState: SampleState = {
  value: 0,
  apiResponse: null
} as SampleState

export const sampleDataSlice = createSlice({
  name: 'sampleData',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    apiResponseUpdate: (state, action: PayloadAction<any>) => {
      console.log(state, 'statestatestate')
      console.log(action, 'xxxx')
      state.apiResponse = action.payload
    }
  }
})

export const { increment, decrement, incrementByValue, apiResponseUpdate } = sampleDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDataValue = (state: RootState) => state.sampleData.value

export default sampleDataSlice.reducer