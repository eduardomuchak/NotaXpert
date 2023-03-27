import { nfs } from "./mocks";

export function TableBody() {
  return (
    <tbody>
      {nfs.map((item, index) => (
        <tr key={index}>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.vim}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.tipo}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.status}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.prioridade}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.agente}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.adicionado}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.vencimento}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.motivo}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.nome}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
