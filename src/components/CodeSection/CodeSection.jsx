import PropTypes from "prop-types";
const CodeSection = ({ title, description, code, table, color = "green" }) => {
  let tableEl;
  const colors = {};
  switch (color) {
    case "green":
      colors.borderColor = "border-green-400";
      colors.headingColor = "text-green-400";
      colors.textColor = "text-green-100";
      colors.codeColor = "text-green-500";
      colors.tableBackgroundColor = "bg-green-900";
      break;
    case "emerald":
      colors.borderColor = "border-emerald-400";
      colors.headingColor = "text-emerald-400";
      colors.textColor = "text-emerald-100";
      colors.codeColor = "text-emerald-500";
      colors.tableBackgroundColor = "bg-emerald-900";
      break;
    case "teal":
      colors.borderColor = "border-teal-400";
      colors.headingColor = "text-teal-400";
      colors.textColor = "text-teal-100";
      colors.codeColor = "text-teal-500";
      colors.tableBackgroundColor = "bg-teal-900";
      break;
    case "cyan":
      colors.borderColor = "border-cyan-400";
      colors.headingColor = "text-cyan-400";
      colors.textColor = "text-cyan-100";
      colors.codeColor = "text-cyan-500";
      colors.tableBackgroundColor = "bg-cyan-900";
      break;
    case "sky":
      colors.borderColor = "border-sky-400";
      colors.headingColor = "text-sky-400";
      colors.textColor = "text-sky-100";
      colors.codeColor = "text-sky-500";
      colors.tableBackgroundColor = "bg-sky-900";
      break;
  }
  if (Array.isArray(table)) {
    const rows = table.map((row, index) => {
      const columns = row.map((col) => {
        if (index !== 0)
          return (
            <td
              className={`border p-3 ${colors.borderColor}`}
              key={crypto.randomUUID()}>
              {col}
            </td>
          );
        else
          return (
            <th
              className={`border p-3 ${colors.tableBackgroundColor} ${colors.borderColor}`}
              key={crypto.randomUUID()}>
              {col}
            </th>
          );
      });
      return <tr key={crypto.randomUUID()}>{columns}</tr>;
    });
    tableEl = (
      <table className="border-separate">
        <thead>{rows[0]}</thead>
        <tbody>{rows.slice(1, rows.length)}</tbody>
      </table>
    );
  }

  return (
    <section
      className={`text-white border rounded-md p-3 flex-grow ${colors.borderColor}`}
      id={title?.replaceAll(" ", "-")}>
      <h1
        className={`font-bold font-kreon text-2xl mb-3 text-center ${colors.headingColor}`}>
        {title}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <p className={`text-lg ${colors.textColor} text-center`}>
          {description}
        </p>
        {Boolean(code) && (
          <code
            className={`my-4 bg-gray-900 p-5 border ${colors.borderColor} block whitespace-pre font-code text-white`}>
            {code}
          </code>
        )}
        {tableEl}
      </div>
    </section>
  );
};
CodeSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  code: PropTypes.string,
  table: PropTypes.array,
  color: PropTypes.oneOf(["green", "cyan", "emerald"]),
};
export default CodeSection;
