import { Item } from '@/interfaces';

export type GetTaskRequestPayload = string;

export type GetTaskSuccessPayload = Item[];

export type GetTaskFailurePayload = unknown;
