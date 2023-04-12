import { Table } from 'presentation/components/Table';

function Body() {
  const body = [
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 1',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 2',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 3',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 4',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 5',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 6',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 7',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 8',
      statusDoc: 'Em andamento',
    },
    {
      dataInicio: '01/01/2021',
      horaInicio: '08:00',
      dataFim: '01/01/2021',
      horaFim: '12:00',
      status: 'Em andamento',
      atividade: 'Atividade 9',
      statusDoc: 'Em andamento',
    },
  ];

  return (
    <>
      {body.map((item, index) => (
        <tr key={`${item}-${index}`}>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.dataInicio}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.horaInicio}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.dataFim}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.horaFim}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.status}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.atividade}
          </td>
          <td className="border-2 px-4 py-2 bg-sanofiGray font-sanofiSansRegular text-black border-black">
            {item.statusDoc}
          </td>
        </tr>
      ))}
    </>
  );
}

export function TableTab() {
  const header = [
    'Data de início',
    'Hora de início',
    'Data fim',
    'Hora fim',
    'Status',
    'Atividade',
    'Status do doc',
  ];

  // const footer = ['Footer'];

  return (
    <div className="flex flex-col gap-14 h-[520px] overflow-auto w-full max-w-[668px]">
      <Table header={header}>
        <Body />
      </Table>
    </div>
  );
}
