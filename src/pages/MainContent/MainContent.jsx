import { Link, Outlet } from "react-router-dom";
import { Contents } from "../../components";
import PropTypes from "prop-types";

const MainContent = ({ data, heading, theme }) => {
  const chapters = Object.keys(data).map((chapter) => {
    return { to: chapter, text: chapter.toUpperCase() };
  });
  let Theme = {};
  switch (theme) {
    case "sky":
      Theme = {
        text: {
          normal: "text-sky-400",
          darker: "text-sky-500",
          hover: "hover:text-sky-300",
        },
        contents: {
          mainList: "text-sky-100 border-sky-400 shadow-sky-500",
          heading: "text-sky-400",
          sublist: "text-sky-400",
        },
      };
      break;
    case "green":
      Theme = {
        text: {
          normal: "text-green-400",
          darker: "text-green-500",
          hover: "hover:text-green-300",
        },
        contents: {
          mainList: "text-green-100 border-green-400 shadow-green-500",
          heading: "text-green-400",
          sublist: "text-green-400",
        },
      };
      break;
    case "emerald":
      Theme = {
        text: {
          normal: "text-emerald-400",
          darker: "text-emerald-500",
          hover: "hover:text-emerald-300",
        },
        contents: {
          mainList: "text-emerald-100 border-emerald-400 shadow-emerald-500",
          heading: "text-emerald-400",
          sublist: "text-emerald-400",
        },
      };
      break;
    case "teal":
      Theme = {
        text: {
          normal: "text-teal-400",
          darker: "text-teal-500",
          hover: "hover:text-teal-300",
        },
        contents: {
          mainList: "text-teal-100 border-teal-400 shadow-teal-500",
          heading: "text-teal-400",
          sublist: "text-teal-400",
        },
      };
      break;
    case "cyan":
      Theme = {
        text: {
          normal: "text-cyan-400",
          darker: "text-cyan-500",
          hover: "hover:text-cyan-300",
        },
        contents: {
          mainList: "text-cyan-100 border-cyan-400 shadow-cyan-500",
          heading: "text-cyan-400",
          sublist: "text-cyan-400",
        },
      };
      break;
    default:
      Theme = {
        text: {
          normal: "text-slate-400",
          darker: "text-slate-500",
          hover: "hover:text-slate-300",
        },
        contents: {
          mainList: "text-slate-100 border-slate-400 shadow-slate-500",
          heading: "text-slate-400",
          sublist: "text-slate-400",
        },
      };
  }
  return (
    <>
      <h1
        className={`text-5xl font-kreon ${Theme.text.normal} text-center mt-40 mb-10`}>
        {heading}
      </h1>
      <Contents
        chapters={chapters}
        colors={Theme.contents}
        optional={"mb-20"}
      />
      <Outlet />
      <Link
        className={`${Theme.text.darker} block text-center my-6 ${Theme.text.hover} transition-colors text-xl`}
        to={"/"}>
        Powrót na stronę główną
      </Link>
    </>
  );
};
MainContent.propTypes = {
  data: PropTypes.object,
  heading: PropTypes.string,
  theme: PropTypes.oneOf(["green", "cyan", "emerald", "sky", "teal"]),
};
export default MainContent;
