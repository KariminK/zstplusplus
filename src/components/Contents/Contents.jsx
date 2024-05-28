import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Contents = ({ chapters, colors }) => {
  return (
    <div>
      <ul
        className={`${colors?.textLight} p-4 list-inside border-2 ${colors?.primary} shadow-md ${colors?.primary} max-w-xl`}
      >
        <h2
          className={`font-kreon text-4xl text-center ${colors?.primaryLighter}`}
        >
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
                <ul className=" list-inside">
                  {chapter.map((subchapter) => (
                    <li
                      className={`border-l pl-2 ml-3 my-2 ${colors?.primaryLighter}`}
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
};
export default Contents;
