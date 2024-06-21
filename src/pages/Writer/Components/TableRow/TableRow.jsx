import PropTypes from "prop-types";

const TableRow = ({ columns, header, rowIndex, onInputChange, data = [] }) => {
  const columnEls = [];
  for (let i = 0; i < columns; i++) {
    if (!header)
      columnEls.push(
        <td className="border-2 p-5" key={crypto.randomUUID()}>
          <input
            type="text"
            className="bg-transparent w-full text-white p-2 border outline-none rounded"
            name="column-input"
            value={data[i]}
            onChange={(e) => onInputChange(e, rowIndex, i)}
          />
        </td>
      );
    else
      columnEls.push(
        <th className="border-2 p-5" key={crypto.randomUUID()}>
          <input
            type="text"
            className="bg-transparent w-full text-white p-2 border outline-none rounded"
            name="column-input"
            value={data[i]}
            onChange={(e) => onInputChange(e, rowIndex, i)}
          />
        </th>
      );
  }
  return <tr>{columnEls}</tr>;
};
TableRow.propTypes = {
  columns: PropTypes.number,
  header: PropTypes.bool,
  rowIndex: PropTypes.number,
  onInputChange: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string),
};
export default TableRow;
