import { TableBodyItems } from "./TableBodyItems";
import { Backlog } from "domain/entities/Backlog";

export function TableBody(props: Backlog.BacklogTableBody) {
  return (
    <tbody>
      {props.backlog.map((item, index) => (
        <TableBodyItems
          key={index}
          vim={item.vim}
          tipo={item.tipo}
          status={item.status}
          prioridade={item.prioridade}
          agente={item.agente}
          adicionado={item.adicionado}
          vencimento={item.vencimento}
          motivo={item.motivo}
          nome={item.nome}
        />
      ))}
    </tbody>
  );
}
