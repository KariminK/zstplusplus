import { useParams } from "react-router-dom";
import notFound from "/src/assets/NotFound.png";

const InProgressPage = () => {
  const { rozdzial } = useParams();
  console.log(rozdzial);
  return (
    <>
      <h1 className="text-white text-5xl font-kreon text-center">
        Nie znaleziono: {rozdzial}
      </h1>
      <p className="text-center text-lg text-white">
        Być może jest w trakcie tworzenia
      </p>
      <img src={notFound} className="max-w-2xl mx-auto" alt="404 not found" />
    </>
  );
};
export default InProgressPage;
