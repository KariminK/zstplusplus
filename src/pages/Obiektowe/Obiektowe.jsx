import { Link, Outlet } from "react-router-dom";
import Contents from "../../components/Contents/Contents";
import obiektoweData from "/src/data/obiektowe.json";

const Obiektowe = () => {
  const chapters = Object.keys(obiektoweData).map((chapter) => {
    return { to: chapter, text: chapter.toUpperCase() };
  });
  return (
    <>
      <h1 className="text-5xl font-kreon text-green-400 text-center mt-40 mb-10">
        Programowanie obiektowe
      </h1>
      <Contents
        chapters={chapters}
        colors={{
          mainList: "text-green-100 border-green-400 shadow-green-500",
          heading: "text-green-400",
          sublist: "text-green-400",
        }}
        optional={"mb-20"}
      />
      <Outlet />
      <Link
        className="text-green-500 block text-center my-6 hover:text-green-300 transition-colors text-xl"
        to={"/"}
      >
        Powrót na stronę główną
      </Link>
    </>
  );
};
export default Obiektowe;
