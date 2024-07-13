
interface TableHeadersProps {
  headers: string[];
}
export const TableHeaders = ({ headers }: TableHeadersProps) => {

  return (
    <thead className={`text-base ${headers.length > 0 && "border-b"} h-10`}>
      <tr>
        {headers.map((item, index) => (
          <th
            key={item + index}
            className="text-white text-start font-bold text-[18px]"
          >
            {(item)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
