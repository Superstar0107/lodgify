import { Progress, ProgressBar } from './styled';

interface Props {
  percent: number;
}

export function ProgressBarComponent({ percent }: Props) {
  return (
    <ProgressBar>
      <Progress
        cy-data-id="progress-bar"
        progress={percent}
      >{`${percent}%`}</Progress>
    </ProgressBar>
  );
}
