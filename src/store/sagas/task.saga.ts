import { call, put } from 'redux-saga/effects';
import { request } from 'utils';
import { AppActions, Task, ResponseGenerator } from 'store';
import { PayloadAction } from '@reduxjs/toolkit';
import { Item } from '@/interfaces';

export function* getTaskListSaga(
  action: PayloadAction<Task.GetTaskRequestPayload>
) {
  try {
    const response: ResponseGenerator<Item[]> = yield call(request, {
      url: `${action.payload}` || '',
      method: 'GET',
    });
    const responseData = response.data;
    yield put(AppActions.task.getTaskListSuccess(responseData));
  } catch (err) {
    yield put(AppActions.task.getTaskListError(err));
  }
}
