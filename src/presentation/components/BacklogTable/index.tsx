import { create } from 'zustand';

import FilterTable from 'presentation/components/FilterTable';
import { KanbanView } from 'presentation/components/KanbanView';

import { ButtonView } from '../ButtonView';

import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { tableHeadItems } from './mocks';
import { nfs } from './mocks';

// import { NotificationCard } from "../NotificationCard";

type MyStoreType = {
  isButtonPressed: boolean;
  toggleButton: () => void;
};

export const useMyStore = create<MyStoreType>((set) => ({
  isButtonPressed: false,
  toggleButton: () =>
    set((state) => ({ isButtonPressed: !state.isButtonPressed })),
}));

export function BacklogTable() {
  const { isButtonPressed } = useMyStore();
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-wrap-reverse justify-between w-full}">
          <div>
            <FilterTable />
          </div>
          <ButtonView isBoard={true} />
        </div>
        {isButtonPressed == false ? (
          <table className="w-full mb-2 bg-gray-100">
            <TableHead headContent={tableHeadItems} />
            <TableBody backlog={nfs} />
          </table>
        ) : (
          <KanbanView kanbanData={{ backlog: nfs }} />
        )}
      </div>
    </>
  );
}

export default BacklogTable;
