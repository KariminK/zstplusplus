import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import MainContent from "./pages/MainContent/MainContent";
import InProgressPage from "./pages/InProgress/InProgress";
import Chapter from "./components/Chapter/Chapter";
import obiektowe from "./data/obiektowe.json";
import Writer from "./pages/Writer/Writer";
const App = () => {
  return (
    <Routes>
      <Route path="/zstplusplus/" element={<Homepage />} />

      <Route
        path="/zstplusplus/obiektowe"
        element={
          <MainContent
            data={obiektowe}
            heading={"Programowanie obiektowe"}
            theme={"green"}
          />
        }
      >
        <Route path="notFound" element={<InProgressPage />} />
        <Route
          path=":chapter"
          element={<Chapter sections={obiektowe} color={"green"} />}
        />
      </Route>

      <Route path="/zstplusplus/writer" element={<Writer />} />
      <Route path="/zstplusplus/*" element={<InProgressPage />} />
    </Routes>
  );
};
export default App;
