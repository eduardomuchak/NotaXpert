import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import FilterTable from "presentation/ui/FilterTable";

import { tableHeadItems } from "./mocks";
import { nfs } from "./mocks";
// import { NotificationCard } from "../NotificationCard";

export function BacklogTable() {
  return (
    <>
      <div className="w-full overflow-x-scroll">
        <table className="w-full mb-2 bg-gray-100">
          <TableHead headContent={tableHeadItems} />
          <TableBody backlog={nfs} />
        </table>
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
