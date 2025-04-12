import { Route, Routes } from "react-router-dom";
import { Homepage, InProgressPage, MainContent, Writer } from "./pages";
import { Chapter } from "./components";
import obiektowe from "./data/obiektowe.json";
import ppai from "./data/ppai.json";
import codefun from "./data/codefun.json";
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
        }>
        <Route path="notFound" element={<InProgressPage />} />
        <Route
          path=":chapter"
          element={<Chapter sections={obiektowe} color={"green"} />}
        />
      </Route>
      <Route
        path="/ppai"
        element={<MainContent data={ppai} heading={"PPAI"} theme={"teal"} />}>
        <Route path="notFound" element={<InProgressPage />} />
        <Route
          path=":chapter"
          element={<Chapter sections={ppai} color={"teal"} />}
        />
      </Route>
      <Route
        path="/codefun"
        element={
          <MainContent data={codefun} heading={"CodeFun"} theme={"sky"} />
        }>
        <Route path="notFound" element={<InProgressPage />} />
        <Route
          path=":chapter"
          element={<Chapter sections={codefun} color={"sky"} />}
        />
      </Route>
      <Route path="/writer" element={<Writer />} />
      <Route path="/*" element={<InProgressPage />} />
    </Routes>
  );
};
export default App;
