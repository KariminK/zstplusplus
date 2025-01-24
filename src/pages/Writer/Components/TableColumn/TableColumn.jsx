import PropTypes from "prop-types";

const TableColumn = ({ value, onInputChange, header }) => {
  if (header)
    return (
      <th className="border-2 p-5">
        <input
          type="text"
          className="bg-transparent w-full text-white p-2 border outline-none rounded"
          name="column-input"
          value={value}
          onChange={onInputChange}
        />
      </th>
    );


    return (
        <td className="border-2 p-5">
          <input
            type="text"
            className="bg-transparent w-full text-white p-2 border outline-none rounded"
            name="column-input"
            value={value}
            onChange={onInputChange}
          />
        </td>
      );  
};

TableColumn.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  header: PropTypes.bool,
};

export default TableColumn;
