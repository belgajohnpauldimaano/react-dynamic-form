import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { increment, decrement, incrementByValue } from 'store/slices'

import { SAMPLEDATA_ACTIONS } from 'sagas/sample-api/action'

const Sample = () => {
  const dispatch = useAppDispatch();
  const sampleData = useAppSelector(state => state.sampleData.value);
  const apiResponseData = useAppSelector(state => state.sampleData.apiResponse);

  const [dataValue, setDataValue] = useState('');

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleSetData = () => {
    dispatch(incrementByValue(+dataValue))
  }

  const handleCallSampleAPI = async () => {
    dispatch({ type: SAMPLEDATA_ACTIONS.FETCH_DATA_SAGA })
  }

  return (
    <div>
      <h3>Data: {sampleData}</h3>
      <button onClick={handleIncrement}>Increment</button> <br />
      <button onClick={handleDecrement}>Decrement</button><br />
      <input onChange={(e) => setDataValue(e.target.value)} value={dataValue} /> <button onClick={handleSetData}>Change</button> <br />

      <button onClick={handleCallSampleAPI}>Call Sample API</button>
      <pre>
        {JSON.stringify(apiResponseData)}
      </pre>
    </div>
  )
}

export default Sample