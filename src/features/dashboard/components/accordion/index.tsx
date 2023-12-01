import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

import { calculateSumOfValues, checkDone } from '@/utils';
import { CheckBoxComponent } from '@/components';

import { DataDoneStatus, Item } from '@/interfaces';

import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTitle,
  AccordionTitleWithIcon,
  ActiveButton,
  TaskItem,
  TaskItemGroup,
} from './styled';

import BookingCloseIcon from '@/assets/svgs/booking-close.svg';
import BookingOkIcon from '@/assets/svgs/booking-ok.svg';
import ArrowDownIcon from '@/assets/svgs/arrow-line-down.svg';
import ArrowUpIcon from '@/assets/svgs/arrow-line-up.svg';
interface Props {
  taskList: Item[];
  setPercent: (arg: number) => void;
}

export function AccordionComponent({ taskList, setPercent }: Props) {
  const [isActive, setIsActive] = useState(-1);
  const [doneList, setDoneList] = useState<DataDoneStatus>(
    {} as DataDoneStatus
  );

  useEffect(() => {
    let tempCheckList = {};
    taskList.forEach((item, itemId) => {
      item.tasks.forEach((task, taskId) => {
        tempCheckList = {
          ...tempCheckList,
          [`${itemId}-${taskId}`]: { value: task.value, checked: task.checked },
        };
      });
    });
    setDoneList(tempCheckList);
  }, []);

  useEffect(() => {
    if (Object.keys(doneList).length > 0)
      setPercent(calculateSumOfValues(doneList));
  }, [doneList]);

  const toggle = (index: number) => {
    if (isActive === index) return setIsActive(-1);
    setIsActive(index);
  };

  const checkedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoneList((prev) => ({
      ...prev,
      [e.target.name]: {
        value: Number(e.target.value),
        checked: e.target.checked,
      },
    }));
  };

  return (
    <>
      {taskList.map((item, itemId) => {
        return (
          <AccordionItem key={itemId}>
            <AccordionHeader
              onClick={() => toggle(itemId)}
              cy-data-id="accordion-header"
            >
              <AccordionTitleWithIcon>
                <img
                  src={
                    checkDone(doneList, `${itemId}-`)
                      ? BookingOkIcon
                      : BookingCloseIcon
                  }
                />
                <AccordionTitle
                  done={checkDone(doneList, `${itemId}-`) ? 'done' : 'todo'}
                >
                  {item.name}
                </AccordionTitle>
              </AccordionTitleWithIcon>
              <ActiveButton>
                {isActive === itemId ? (
                  <>
                    Hide
                    <img src={ArrowUpIcon} />
                  </>
                ) : (
                  <>
                    Show
                    <img src={ArrowDownIcon} />
                  </>
                )}
              </ActiveButton>
            </AccordionHeader>
            {isActive === itemId ? (
              <Fade>
                <AccordionContent cy-data-id="accordion-content">
                  <TaskItemGroup>
                    {item.tasks.map((task, taskId) => (
                      <TaskItem key={taskId}>
                        <CheckBoxComponent
                          onChangeFn={checkedHandler}
                          name={`${itemId}-${taskId}`}
                          id={`${itemId}-${taskId}`}
                          value={task.value}
                          checked={doneList[`${itemId}-${taskId}`].checked}
                          label={task.description}
                        />
                      </TaskItem>
                    ))}
                  </TaskItemGroup>
                </AccordionContent>
              </Fade>
            ) : null}
          </AccordionItem>
        );
      })}
    </>
  );
}
