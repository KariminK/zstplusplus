import PropTypes from "prop-types";
import TableColumn from "../TableColumn/TableColumn";

const TableRow = ({ columns, header, rowIndex, onInputChange, data = [] }) => {
  const columnEls = [];
  for (let i = 0; i < columns; i++) {
    columnEls.push(
      <TableColumn
        value={data[i]}
        onInputChange={(e) => onInputChange(e, rowIndex, i)}
        header={header}
        key={`column ${i}`}
      />
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
