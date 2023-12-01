import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppActions, RootState } from '@/store';


export function DashboardFeature() {
  const dispatch = useDispatch();


  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    dispatch(AppActions.task.getTaskList(apiUrl!));
  }, []);

  const { isLoading, taskList } = useSelector((state: RootState) => state.task);

  return <>Dashboard Feature</>
}
