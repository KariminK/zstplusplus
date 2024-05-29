import PropTypes from "prop-types";
const Section = ({ title, description, code, table }) => {
  let tableEl;
  if (Array.isArray(table)) {
    const rows = table.map((row, index) => {
      const columns = row.map((col) => {
        if (index !== 0) return <td key={crypto.randomUUID()}>{col}</td>;
        else return <th key={crypto.randomUUID()}>{col}</th>;
      });
      return <tr key={crypto.randomUUID()}>{columns}</tr>;
    });
    tableEl = <table>{rows}</table>;
  }
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {Boolean(code) && <code>{code}</code>}
      {tableEl}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  code: PropTypes.string,
  table: PropTypes.array,
};
export default Section;
