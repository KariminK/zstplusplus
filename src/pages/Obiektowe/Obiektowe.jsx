import Contents from "../../components/Contents/Contents";

const Obiektowe = () => {
  return (
    <main className="">
      <h1 className="text-5xl font-kreon text-green-400 text-center mt-40 mb-10">
        Programowanie obiektowe
      </h1>
      <Contents
        chapters={[
          { to: "/pliki", text: "Obsługa plików" },
          [
            { to: "/pliki#fstream", text: "fstream" },
            { to: "/pliki#seekg", text: "seekg i seekp" },
          ],
          { to: "/obiektyphp", text: "Klasy i obiekty w PHP" },
          [
            { to: "/obiektyphp#konstruktor", text: "Konstruktor" },
            { to: "/obiektyphp#destruktor", text: "Destruktor" },
          ],
        ]}
        colors={{
          mainList: "text-green-100 border-green-400 shadow-green-500",
          heading: "text-green-400",
          sublist: "text-green-400",
        }}
      />
    </main>
  );
};
export default Obiektowe;
