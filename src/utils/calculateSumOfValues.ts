import { DataDoneStatus } from '@/interfaces';

export const calculateSumOfValues = (data: DataDoneStatus): number => {
  const values = Object.values(data);
  const sum = values.reduce((acc, item) => acc + item.value, 0);
  const checkedSum = values.reduce(
    (acc, item) => (item.checked ? acc + item.value : acc),
    0
  );
  return Number(((checkedSum * 100) / sum).toFixed(2));
};
