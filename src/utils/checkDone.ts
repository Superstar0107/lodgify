import { DataDoneStatus } from '@/interfaces';

export const checkDone = (data: DataDoneStatus, keyPart: string): boolean => {
  return Object.keys(data)
    .filter((key) => key.includes(keyPart))
    .every((key) => data[key].checked);
};
