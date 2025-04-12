import { useState } from "react";
import { TableRow, Label } from "./Components";
const Writer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(2);
  const [table, setTable] = useState([]);

  const inputChangeHandle = (e, setState) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const codeKeyDownHandle = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setCode(code + "\t");
    }
  };

  const addToTableHandle = (e, state, setState, cols) => {
    e.preventDefault();
    const newTable = structuredClone(table);
    if (cols) {
      for (let i = 0; i < newTable.length; i++) {
        newTable[i].push("");
      }
    } else {
      newTable.push(new Array(columns).fill(""));
    }
    setTable(newTable);
    setState(state + 1);
  };
  const removeFromTableHandle = (e, state, setState, cols) => {
    e.preventDefault();
    if (state === 0) return;
    const newTable = structuredClone(table);
    if (cols) {
      for (let i = 0; i < newTable.length; i++) {
        newTable[i].pop("");
      }
    } else {
      newTable.pop(new Array(columns));
    }
    setTable(newTable);
    setState(state - 1);
  };
  const tableInputChangeHandle = (e, row, col) => {
    const newTable = structuredClone(table);
    newTable[row][col] = e.target.value;
    setTable(newTable);
  };
  const rowElements = [];
  for (let i = 0; i < rows - 1; i++)
    rowElements.push(
      <TableRow
        columns={columns}
        key={`row ${i}`}
        onInputChange={tableInputChangeHandle}
        rowIndex={i + 1}
        data={table[i + 1]}
      />
    );
  const output = JSON.stringify({
    title,
    description,
    code,
    table,
  });
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="my-5 text-6xl font-bold text-center text-white font-kreon">
        Writer
      </h1>
      <form className="">
        <Label text={"Tytuł:"} htmlFor={"section-title"}>
          <input
            className="w-3/4 p-2 bg-transparent border rounded"
            type="text"
            name="section-title"
            id="section-title"
            onChange={(e) => inputChangeHandle(e, setTitle)}
            value={title}
          />
        </Label>
        <Label text={"Opis: "} htmlFor={"section-description"}>
          <textarea
            rows={8}
            name="section-description"
            id="section-description"
            className="w-3/4 p-5 bg-transparent border rounded"
            onChange={(e) => inputChangeHandle(e, setDescription)}
            value={description}></textarea>
        </Label>
        <Label text={"Kod: "} htmlFor={"section-code"}>
          <textarea
            rows={10}
            name="section-code"
            id="section-code"
            className="w-3/4 p-5 text-base bg-gray-900 border rounded font-code"
            onChange={(e) => inputChangeHandle(e, setCode)}
            onKeyDown={codeKeyDownHandle}
            value={code}></textarea>
        </Label>
        <h2 className="text-3xl text-white text-bold">Tabela</h2>
        <div className="flex justify-between my-3">
          <button
            className="p-3 font-bold text-white border-2 rounded-lg"
            onClick={(e) => addToTableHandle(e, columns, setColumns, true)}>
            Dodaj kolumnę
          </button>
          <button
            className="p-3 font-bold text-white border-2 rounded-lg"
            onClick={(e) =>
              removeFromTableHandle(e, columns, setColumns, true)
            }>
            Usuń kolumnę
          </button>
          <button
            className="p-3 font-bold text-white border-2 rounded-lg"
            onClick={(e) => addToTableHandle(e, rows, setRows)}>
            Dodaj wiersz
          </button>
          <button
            className="p-3 font-bold text-white border-2 rounded-lg"
            onClick={(e) => removeFromTableHandle(e, rows, setRows)}>
            Usuń wiersz
          </button>
        </div>
        <table className="w-full my-5">
          <thead>
            {rows > 0 && (
              <TableRow
                columns={columns}
                header={true}
                onInputChange={tableInputChangeHandle}
                rowIndex={0}
                data={table[0]}
              />
            )}
          </thead>
          <tbody>{rowElements}</tbody>
        </table>

        <Label text={"Output:"}>
          <textarea
            className="w-3/4 text-white bg-transparent border border-green-500 rounded outline-none font-code"
            value={output}
            readOnly
            name="output"
            id="output"></textarea>
        </Label>
      </form>
    </section>
  );
};
export default Writer;
