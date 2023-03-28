import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import FilterTable from "presentation/ui/FilterTable";

import { tableHeadItems } from "./mocks";
import { nfs } from "./mocks";
import { ButtonView } from "../ButtonView";
import { KanbanView } from 'presentation/ui/KanbanView';
import create from 'zustand';
import { useEffect, useRef, useState } from "react";
// import { NotificationCard } from "../NotificationCard";

type MyStoreType = {
  isButtonPressed: boolean;
  toggleButton: () => void;
};

export const useMyStore = create<MyStoreType>((set) => ({
  isButtonPressed: false,
  toggleButton: () => set((state) => ({ isButtonPressed: !state.isButtonPressed })),
}));

export function BacklogTable() {
  const { isButtonPressed, toggleButton } = useMyStore();
  return (
    <>
      <div className="w-full overflow-x-scroll">
        <div className='flex flex-row justify-between w-full}'>
          <FilterTable />
          <ButtonView isBoard={true} />
        </div>
        {isButtonPressed == false ?
          (
            <table className="w-full mb-2 bg-gray-100">
              <TableHead headContent={tableHeadItems} />
              <TableBody backlog={nfs} />
            </table>
          )
          :
          (
            <KanbanView backlog={nfs} />
          )}
      </div>
      {/* <NotificationCard
        notification={{
          id: "549167",
          title: "Vim está vencido há 15 dias",
          isUrgent: true,
          type: "NF",
          date: "Notificação de 15/01/2023",
        }}
      /> */}
    </>
  );
}

export default BacklogTable;
