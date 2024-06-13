import PropTypes from "prop-types";

const TableRow = ({ columns, header }) => {
  const columnEls = [];
  for (let i = 0; i < columns; i++) {
    if (!header)
      columnEls.push(
        <td className="border-2 p-5" key={crypto.randomUUID()}>
          <input
            type="text"
            className="bg-transparent w-full text-white p-2 border outline-none rounded"
            name=""
            id=""
          />
        </td>
      );
    else
      columnEls.push(
        <th className="border-2 p-5" key={crypto.randomUUID()}>
          <input
            type="text"
            className="bg-transparent w-full text-white p-2 border outline-none rounded"
            name=""
            id=""
          />
        </th>
      );
  }
  return <tr>{columnEls}</tr>;
};
TableRow.propTypes = {
  columns: PropTypes.number,
  header: PropTypes.bool,
};
export default TableRow;
