import { useState } from "react";
import Label from "./Components/Label";

const Writer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

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
  const output = JSON.stringify({
    title,
    description,
    code,
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
