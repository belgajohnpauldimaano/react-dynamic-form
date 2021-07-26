import { call, takeEvery, put } from 'redux-saga/effects'
import Axios from "axios";

import { populateFormFieldsData } from 'store/slices'

import { actions } from './actions'

export function* fetchFormSaga(): any {
  try {
    const result: any = yield call(() =>
      Axios({
        url: process.env.REACT_APP_FROM_API,
        method: 'GET',
      }));
    yield put(populateFormFieldsData(result.data.data))
  } catch (error) {
    return
  }
}


export default function* rootSaga() {
  yield takeEvery(actions.FETCH_DYNAMIC_FORM, fetchFormSaga);
}