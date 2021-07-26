import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'

import { actions } from 'sagas/dynamic-form-api/actions'

const DynamicForm = () => {
  const dispatch = useAppDispatch();
  const formFields = useAppSelector(state => state.dynamicForm.formFields)

  console.log(formFields, 'formFieldsformFields')

  useEffect(() => {
    dispatch({ type: actions.FETCH_DYNAMIC_FORM })
  }, [dispatch])

  return (
    <div>
      <pre>
        {JSON.stringify(formFields)}
      </pre>
    </div>
  )
}

export default DynamicForm