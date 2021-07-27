import { call, takeEvery, put, all } from 'redux-saga/effects'
import Axios from "axios";

import { populateFormFieldsData, populateAPIResponse } from 'store/slices'

import { actions } from './actions'

export function* fetchFormSaga(): any {
  try {
    const result: any = yield call(() =>
      Axios({
        url: `${process.env.REACT_APP_FROM_API}/api/form`,
        method: 'GET',
      }));
    yield put(populateFormFieldsData(result.data.data))
  } catch (error) {
    return
  }
}

export function* submitFormSaga({ payload }: any): any {
  try {
    const result: any = yield call(() =>
      Axios({
        url: `${process.env.REACT_APP_FROM_API}/api/form`,
        method: 'POST',
        data: payload
      }));
    yield put(populateAPIResponse(result.data))
  } catch (error) {
    return
  }
}


export default function* dynamicFormAPISaga() {
  yield all([
    takeEvery(actions.FETCH_DYNAMIC_FORM, fetchFormSaga),
    takeEvery(actions.SUBMIT_DYNAMIC_FORM, submitFormSaga)
  ]);
}