/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '@/interfaces';
import { Task } from '../types';

type TaskState = {
  taskList: Item[];
  isLoading: boolean;
  error: unknown;
};

const initialState: TaskState = {
  taskList: [],
  isLoading: false,
  error: undefined,
};

const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    getTaskList(
      state: TaskState,
      _action: PayloadAction<Task.GetTaskRequestPayload>
    ) {
      state.isLoading = true;
    },
    getTaskListSuccess(
      state: TaskState,
      action: PayloadAction<Task.GetTaskSuccessPayload>
    ) {
      state.taskList = action.payload;
      state.isLoading = false;
    },
    getTaskListError(
      state: TaskState,
      action: PayloadAction<Task.GetTaskFailurePayload>
    ) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const actions = taskSlice.actions;
export const reducer = taskSlice.reducer;
