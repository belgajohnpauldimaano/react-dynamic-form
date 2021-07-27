import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DynamicFormState {
  formFields: any[]
  apiResponse: null
}

// Define the initial state using that type
const initialState: DynamicFormState = {
  formFields: [],
  apiResponse: null
} as DynamicFormState

export const DynamicFormDataSlice = createSlice({
  name: 'dynamicFormData',
  initialState,
  reducers: {
    populateFormFieldsData: (state, action: PayloadAction<any>) => {
      state.formFields = action.payload
    },
    populateAPIResponse: (state, action: PayloadAction<any>) => {
      state.apiResponse = action.payload
    }
  }
})

export const { populateFormFieldsData, populateAPIResponse } = DynamicFormDataSlice.actions

export default DynamicFormDataSlice.reducer