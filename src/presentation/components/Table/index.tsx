import { CustomTable } from './interface';

export function Table({ header, children, footer }: CustomTable.TableProps) {
  // Make sure that the footer has the same length as the header
  if (footer && footer.length < header.length) {
    const diferenca = header.length - footer.length;
    for (let index = 0; index < diferenca; index += 1) {
      footer.push('');
    }
  }

  return (
    <table className="w-full overflow-auto">
      <thead>
        <tr>
          {header.map((item, index) => (
            <th
              className="px-4 py-2 text-left font-sanofiSansBold text-white bg-sanofiPurpleDark border-2 border-white"
              key={`${item}-${index}`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
      {footer ? (
        <tfoot>
          <tr>
            {footer.map((item, index) => (
              <td
                className="px-4 py-2 text-left font-sanofiSansBold text-white bg-sanofiPurpleDark border-y-2 border-white"
                key={`${item}-${index}`}
              >
                {item}
              </td>
            ))}
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
}
