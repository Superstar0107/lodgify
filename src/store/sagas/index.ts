import { all, takeLatest } from 'redux-saga/effects';
import { getTaskListSaga } from './task.saga';
import { taskAction } from 'store/slices';

export function* appSaga() {
  yield all([takeLatest(taskAction.getTaskList.type, getTaskListSaga)]);
}
