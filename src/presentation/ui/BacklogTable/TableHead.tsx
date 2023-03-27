interface TableHeadProps {
  headContent: string[];
}

export function TableHead(props: TableHeadProps) {
  return (
    <thead className="bg-gray-200">
      <tr>
        {props.headContent.map((item, index) => (
          <th
            className="px-4 py-2 text-left font-sanofiSansBold text-white bg-sanofiPurpleDark border-2 border-white"
            key={index}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
