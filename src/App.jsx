import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Obiektowe from "./pages/Obiektowe/Obiektowe";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/obiektowe" element={<Obiektowe />} />
    </Routes>
  );
};
export default App;
