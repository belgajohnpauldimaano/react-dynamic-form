import { call, takeEvery, put } from 'redux-saga/effects'
import Axios from "axios";

import { apiResponseUpdate } from 'store/slices'

import { SAMPLEDATA_ACTIONS } from './action'

export function* fetchDataSaga(): any {
  try {
    const result: any = yield call(() =>
      Axios({
        url: 'https://reqres.in/api/products/3',
        method: 'GET',
      }));
    yield put(apiResponseUpdate(result.data.data))
  } catch (error) {
    return
  }
}


export default function* rootSaga() {
  yield takeEvery(SAMPLEDATA_ACTIONS.FETCH_DATA_SAGA, fetchDataSaga);
}