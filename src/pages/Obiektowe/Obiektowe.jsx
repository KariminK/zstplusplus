import { Outlet } from "react-router-dom";
import Contents from "../../components/Contents/Contents";

const Obiektowe = () => {
  return (
    <>
      <h1 className="text-5xl font-kreon text-green-400 text-center mt-40 mb-10">
        Programowanie obiektowe
      </h1>
      <Contents
        chapters={[
          { to: "./pliki c++", text: "Obsługa plików" },
          { to: "./klasy php", text: "Klasy i obiekty w PHP" },
        ]}
        colors={{
          mainList: "text-green-100 border-green-400 shadow-green-500",
          heading: "text-green-400",
          sublist: "text-green-400",
        }}
        optional={"mb-20"}
      />
      <Outlet />
    </>
  );
};
export default Obiektowe;
