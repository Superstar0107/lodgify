import styled from 'styled-components';

interface ProgressProps {
  progress: number;
}

export const ProgressBar = styled.div`
  width: 100%;
  background-color: #f2fbfa;
  border-radius: 16px;
`;

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  border-radius: 16px;
  width: ${(props) => props.progress}%;
  background-color: ${(props) =>
    props.progress !== 0 ? `#00b797` : `transparent`};
  text-align: right;
  font-size: 1rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  vertical-align: middle;
  line-height: 20px;
  padding: 2px 16px 2px 0px;
  margin: ${(props) => (props.progress !== 0 ? `0` : `0 auto`)};
  color: ${(props) => (props.progress !== 0 ? `white` : `#00b797`)};
  box-sizing: border-box;
`;
