import PropTypes from "prop-types";
import CodeSection from "../CodeSection/CodeSection";
import { useNavigate, useParams } from "react-router-dom";
import chapters from "/src/data/chapters.json";
const Chapter = ({ id, sections = [] }) => {
  let sectionEls = [];
  const { chapter } = useParams();
  const navigate = useNavigate();

  if (chapter != "" && chapter in chapters) {
    sections = chapters[chapter];
  } else {
    navigate("/notFound");
  }
  sectionEls = sections.map((section) => {
    return (
      <CodeSection
        key={crypto.randomUUID()}
        title={section.title}
        description={section.description}
        code={section.code}
        color={section.color}
        table={section.table}
      />
    );
  });
  return (
    <main id={id} className="flex flex-wrap gap-10 max-w-4xl mx-auto">
      {chapter && (
        <h1 className=" w-full text-center text-white font-kreon uppercase text-4xl">
          {chapter}
        </h1>
      )}
      {sectionEls}
    </main>
  );
};
Chapter.propTypes = {
  id: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object),
};

export default Chapter;
