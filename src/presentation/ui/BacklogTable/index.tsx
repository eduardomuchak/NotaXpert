import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

const headData = [
  "VIM",
  "Tipo",
  "Status",
  "Prioridade",
  "Agente",
  "Adicionado",
  "Vencimento",
  "Motivo da Exceção",
  "Nome",
];

export function BacklogTable() {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full mb-2 bg-gray-100">
        <TableHead headContent={headData} />
        <TableBody />
      </table>
    </div>
  );
}

export default BacklogTable;
