export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface Item {
  name: string;
  tasks: Task[];
}

export interface DataDoneStatus {
  [key: string]: {
    value: number;
    checked: boolean;
  };
}
