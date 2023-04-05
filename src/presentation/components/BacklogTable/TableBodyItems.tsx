import { Backlog } from 'domain/entities/Backlog';

export function TableBodyItems({
  vim,
  tipo,
  status,
  prioridade,
  agente,
  adicionado,
  vencimento,
  motivo,
  nome,
}: Backlog.BacklogContent) {
  return (
    <tr>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {vim}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {tipo}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {status}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {prioridade}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {agente}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {adicionado}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {vencimento}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {motivo}
      </td>
      <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
        {nome}
      </td>
    </tr>
  );
}
