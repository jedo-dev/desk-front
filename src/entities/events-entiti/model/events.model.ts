import { TableProps } from 'antd';

export interface IEvents {
  content: {
    dateReceipt: string;
    eventDate: string;
    npp: {
      code: string;
    };
    block: {
      code: string;
    };
    category: string;
    inesName: string;
    report: string;
    typeEvent: string;
    typeReport: string;
    input: boolean;
    consider: boolean;
  }[];
  totalElements: number;
  totalPages: number;
}

export interface IEventsAnt {
  pagination: TableProps['pagination'];
}
