import { ReactNode, TableHTMLAttributes } from 'react';

export namespace CustomTable {
  export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    header: string[];
    children: ReactNode;
    footer?: string[];
  }
}
