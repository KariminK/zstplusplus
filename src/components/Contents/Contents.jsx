import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Contents = ({
  chapters,
  colors = {
    mainList: "text-slate-100 border-slate-400 shadow-slate-500",
    heading: "text-slate-400",
    sublist: "text-slate-400",
  },
  optional,
}) => {
  return (
    <div>
      <ul
        className={
          "p-4 list-inside border-2 shadow-md mx-auto max-w-xl " +
          colors.mainList +
          " " +
          optional
        }
      >
        <h2 className={"font-kreon text-4xl text-center " + colors.heading}>
          Spis treści:
        </h2>
        {chapters.map((chapter) => {
          if (!Array.isArray(chapter))
            return (
              <li key={crypto.randomUUID()}>
                <Link className="text-xl font-bold" to={chapter.to}>
                  {chapter.text}
                </Link>
              </li>
            );
          else
            return (
              <li key={crypto.randomUUID()} className="list-none">
                <ul className={"list-inside " + colors.sublist}>
                  {chapter.map((subchapter) => (
                    <li
                      className="border-l pl-2 ml-3 my-2 "
                      key={crypto.randomUUID()}
                    >
                      <Link to={subchapter.to}>{subchapter.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
        })}
      </ul>
    </div>
  );
};
Contents.propTypes = {
  chapters: PropTypes.array,
  colors: PropTypes.object,
  optional: PropTypes.string,
};
export default Contents;
