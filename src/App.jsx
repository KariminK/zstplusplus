import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import MainContent from "./pages/MainContent/MainContent";
import InProgressPage from "./pages/InProgress/InProgress";
import Chapter from "./components/Chapter/Chapter";
import obiektowe from "/src/data/obiektowe.json";
import Writer from "./pages/Writer/Writer";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/obiektowe"
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

      <Route
        path="/ppad"
        element={
          <MainContent data={obiektowe} heading={"PPAD"} theme={"emerald"} />
        }
      >
        <Route path="notFound" element={<InProgressPage />} />
        <Route
          path=":chapter"
          element={<Chapter sections={obiektowe} color={"emerald"} />}
        />
      </Route>
      <Route path="/writer" element={<Writer />} />
      <Route path="/*" element={<InProgressPage />} />
    </Routes>
  );
};
export default App;
