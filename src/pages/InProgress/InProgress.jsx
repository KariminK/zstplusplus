import { useParams } from "react-router-dom";
import notFound from "/src/assets/NotFound.png";

const InProgressPage = () => {
  const { rozdzial } = useParams();
  return (
    <>
      <h1 className="text-white text-6xl mt-10 font-kreon text-center">
        Nie znaleziono{rozdzial && `: ${rozdzial}`}
      </h1>
      <p className="text-center text-lg text-white">
        Być może jest w trakcie tworzenia
      </p>
      <img src={notFound} className="max-w-2xl mx-auto" alt="404 not found" />
    </>
  );
};
export default InProgressPage;
