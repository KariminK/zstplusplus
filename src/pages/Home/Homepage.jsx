import Card from "./Components/Card";
import obiektoweImg from "/src/assets/obiektoweBackground.png";
import ppsiImg from "/src/assets/ppsiBackground.png";
import psiImg from "/src/assets/psiBackground.png";
import szbdImg from "/src/assets/szbdBackground.png";
import codefunImg from "/src/assets/codefunBackground.png";
const Homepage = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center text-green-300 font-kreon min-h-96">
        <h1 className="text-center text-green-500 text-9xl">ZST++</h1>
        <p className="text-xl">Materiały do nauki</p>
      </header>
      <div className="flex flex-wrap justify-center gap-10">
        <Card
          theme={"hover:shadow-green-500 border-green-500 text-green-500"}
          to={"/obiektowe"}
          text={"Obiektowe"}
          img={obiektoweImg}
        />
        <Card
          theme={"hover:shadow-emerald-500 border-emerald-500 text-emerald-500"}
          to={"/ppad"}
          text={"PPAD"}
          img={ppsiImg}
        />
        <Card
          theme={"hover:shadow-teal-500 border-teal-500 text-teal-500"}
          to={"/ppai"}
          text={"PSI/PPAI"}
          img={psiImg}
        />
        <Card
          theme={"hover:shadow-cyan-500 border-cyan-500 text-cyan-500"}
          to={"/szbd"}
          text={"SZBD"}
          img={szbdImg}
        />
        <Card
          theme={"hover:shadow-sky-500 border-sky-500 text-sky-500"}
          to={"/codefun"}
          text={"CodeFun"}
          img={codefunImg}
        />
      </div>
    </>
  );
};
export default Homepage;
