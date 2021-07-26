import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DynamicFormState {
  formFields: any[]
}

// Define the initial state using that type
const initialState: DynamicFormState = {
  formFields: [],
} as DynamicFormState

export const DynamicFormDataSlice = createSlice({
  name: 'dynamicFormData',
  initialState,
  reducers: {
    populateFormFieldsData: (state, action: PayloadAction<any>) => {
      console.log(state, 'statestatestate')
      console.log(action, 'xxxx')
      state.formFields = action.payload
    }
  }
})

export const { populateFormFieldsData } = DynamicFormDataSlice.actions

export default DynamicFormDataSlice.reducer