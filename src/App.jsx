import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Obiektowe from "./pages/Obiektowe/Obiektowe";
import InProgressPage from "./pages/InProgress/InProgress";
import CodeSection from "./components/CodeSection/CodeSection";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/obiektowe" element={<Obiektowe />}>
        <Route path=":rozdzial" element={<InProgressPage />} />
      </Route>
      <Route
        path="/playground"
        element={
          <CodeSection
            title={"Lorem ipsum dolor sit amet"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda necessitatibus dolores consequuntur sit doloribus inventore dignissimos"
            }
            code={`console.log("hello world"); \n// hello world`}
            table={[
              ["headers1", "headers2", "headers3"],
              ["first1", "first2", "first3"],
              ["second1", "second2", "second3"],
            ]}
            color={"green"}
          />
        }
      />
    </Routes>
  );
};
export default App;
