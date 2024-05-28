import Contents from "../../components/Contents/Contents";

const Obiektowe = () => {
  return (
    <main className="">
      <Contents
        chapters={[
          { to: "/pliki", text: "Obsługa plików" },
          [
            { to: "/pliki#fstream", text: "fstream" },
            { to: "/pliki#seekg", text: "seekg i seekp" },
          ],
        ]}
      />
    </main>
  );
};
export default Obiektowe;
