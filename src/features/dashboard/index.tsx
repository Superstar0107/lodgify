import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppActions, RootState } from '@/store';

import { AccordionComponent, ProgressBarComponent } from './components';
import { Content, Header, Title } from './styled';

export function DashboardFeature() {
  const dispatch = useDispatch();

  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    dispatch(AppActions.task.getTaskList(apiUrl!));
  }, []);

  const { taskList } = useSelector((state: RootState) => state.task);

  return (
    <>
      <Header>
        <Title cy-data-id="title">Lodgify Grouped Tasks</Title>
        <ProgressBarComponent percent={percent} />
      </Header>
      <Content>
        {taskList.length > 0 && (
          <AccordionComponent taskList={taskList} setPercent={setPercent} />
        )}
      </Content>
    </>
  );
}
