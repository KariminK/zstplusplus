import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Obiektowe from "./pages/Obiektowe/Obiektowe";
import InProgressPage from "./pages/InProgress/InProgress";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/obiektowe" element={<Obiektowe />}>
        <Route path=":rozdzial" element={<InProgressPage />} />
      </Route>
    </Routes>
  );
};
export default App;
