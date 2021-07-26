import { all } from 'redux-saga/effects'

import sampleAPISaga from './sample-api'

export default function* rootSaga() {
  yield all([sampleAPISaga()])
}