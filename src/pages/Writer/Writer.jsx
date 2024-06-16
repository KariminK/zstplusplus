import { useState } from "react";
import Label from "./Components/Label";
import TableRow from "./Components/TableRow/TableRow";

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
        newTable[i].push(null);
      }
    } else {
      newTable.push(new Array(columns));
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
        newTable[i].pop(null);
      }
    } else {
      newTable.pop(new Array(columns));
    }
    setTable(newTable);
    setState(state - 1);
  };
  const tableInputChangeHandle = (e, row, col) => {
    console.log("row: ", row);
    console.log("col: ", col);
    console.log("val: ", e.target.value);
    const newTable = structuredClone(table);
    newTable[row][col] = e.target.value;
    setTable(newTable);
  };
  const rowElements = [];
  for (let i = 0; i < rows - 1; i++)
    rowElements.push(
      <TableRow
        columns={columns}
        key={crypto.randomUUID()}
        onInputChange={tableInputChangeHandle}
        rowIndex={i + 1}
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
      <h1 className="text-center text-6xl my-5 font-bold text-white font-kreon">
        Writer
      </h1>
      <form className="">
        <Label text={"Tytuł:"} htmlFor={"section-title"}>
          <input
            className="bg-transparent border rounded w-3/4 p-2"
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
            className="bg-transparent p-5 w-3/4 border rounded"
            onChange={(e) => inputChangeHandle(e, setDescription)}
            value={description}
          ></textarea>
        </Label>
        <Label text={"Kod: "} htmlFor={"section-code"}>
          <textarea
            rows={10}
            name="section-code"
            id="section-code"
            className="bg-gray-900 text-base p-5 font-code w-3/4 border rounded"
            onChange={(e) => inputChangeHandle(e, setCode)}
            onKeyDown={codeKeyDownHandle}
            value={code}
          ></textarea>
        </Label>
        <h2 className="text-3xl text-white text-bold">Tabela</h2>
        <div className="flex justify-between my-3">
          <button
            className="border-2 rounded-lg text-white font-bold p-3"
            onClick={(e) => addToTableHandle(e, columns, setColumns, true)}
          >
            Dodaj kolumnę
          </button>
          <button
            className="border-2 rounded-lg text-white font-bold p-3"
            onClick={(e) => removeFromTableHandle(e, columns, setColumns, true)}
          >
            Usuń kolumnę
          </button>
          <button
            className="border-2 rounded-lg text-white font-bold p-3"
            onClick={(e) => addToTableHandle(e, rows, setRows)}
          >
            Dodaj wiersz
          </button>
          <button
            className="border-2 rounded-lg text-white font-bold p-3"
            onClick={(e) => removeFromTableHandle(e, rows, setRows)}
          >
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
              />
            )}
          </thead>
          <tbody>{rowElements}</tbody>
        </table>

        <Label text={"Output:"}>
          <textarea
            className="w-3/4 text-white font-code bg-transparent border border-green-500 rounded outline-none"
            value={output}
            readOnly
            name="output"
            id="output"
          ></textarea>
        </Label>
      </form>
    </section>
  );
};
export default Writer;
