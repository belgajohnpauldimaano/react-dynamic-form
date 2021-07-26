import { all } from 'redux-saga/effects'

import sampleAPISaga from './sample-api'
import dynamicFormSaga from './dynamic-form-api'

export default function* rootSaga() {
  yield all([sampleAPISaga(), dynamicFormSaga()])
}