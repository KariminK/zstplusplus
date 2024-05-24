import Card from "./Components/Card";
import obiektoweImg from "/src/assets/obiektoweBackground.png";
import ppsiImg from "/src/assets/ppsiBackground.png";
import psiImg from "/src/assets/psiBackground.png";
import szbdImg from "/src/assets/szbdBackground.png";
const Homepage = () => {
  return (
    <>
      <header className="text-green-300 font-kreon min-h-96 flex flex-col justify-center items-center">
        <h1 className="text-9xl text-center text-green-500">ZST++</h1>
        <p className="text-xl">Dokumentacja do sprawdzianów/kartkówek</p>
      </header>
      <div className="flex justify-center gap-10 flex-wrap">
        <Card
          theme={"hover:shadow-green-500 border-green-500 text-green-500"}
          to={"/obiektowe"}
          text={"Obiektowe"}
          img={obiektoweImg}
        />
        <Card
          theme={"hover:shadow-emerald-500 border-emerald-500 text-emerald-500"}
          to={"/PPSI"}
          text={"PPSI"}
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
      </div>
    </>
  );
};
export default Homepage;
