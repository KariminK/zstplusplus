import PropTypes from "prop-types";
const Contents = ({ chapters }) => {
  return (
    <div>
      <ul className="text-white list-decimal p-4 list-inside border-2 border-green-400 shadow-md shadow-green-500 max-w-xl">
        <h2 className="font-kreon text-4xl text-center text-green-400">
          Spis treści:
        </h2>
        {chapters.map((chapter) => {
          if (!Array.isArray(chapter))
            return <li key={crypto.randomUUID()}>{chapter}</li>;
          else
            return (
              <li key={crypto.randomUUID()} className="list-none">
                <ul className="ml-5 list-decimal list-inside">
                  {chapter.map((subchapter) => (
                    <li key={crypto.randomUUID()}>{subchapter}</li>
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
};
export default Contents;
