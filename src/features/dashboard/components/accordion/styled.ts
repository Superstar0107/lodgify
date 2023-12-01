import styled from 'styled-components';

interface AccordionTitleProps {
  done?: string;
}

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid var('--color-border');
  &:last-child {
    border: 0px;
  }
`;
export const AccordionHeader = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  justify-content: space-between;
  cursor: pointer;
`;

export const ActiveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  cursor: pointer;
  color: #999999;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AccordionTitleWithIcon = styled.h3`
  margin: 0;
  color: #333333;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AccordionTitle = styled.span<AccordionTitleProps>`
  color: ${(props) =>
    props.done === 'done' ? `var(--color-primary)` : `var(--greyscale-900)`};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const AccordionContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const TaskItem = styled.li`
  list-style-type: none;
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 16px;
`;

export const TaskItemGroup = styled.ul`
  padding: 0;
  margin: 0;
`;
