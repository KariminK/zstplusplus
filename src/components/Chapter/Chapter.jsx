import PropTypes from "prop-types";
import CodeSection from "../CodeSection/CodeSection";
import { useNavigate, useParams } from "react-router-dom";
const Chapter = ({ id, sections = [], color }) => {
  let sectionEls = [];
  const { chapter } = useParams();
  const navigate = useNavigate();
  if (typeof sections === "object" && !Array.isArray(sections)) {
    sections = sections[chapter];
  }
  useNavigate(() => {
    if (chapter === "" || !(chapter in sections)) {
      navigate("./notFound");
    }
  });

  sectionEls = sections.map((section) => {
    return (
      <CodeSection
        key={crypto.randomUUID()}
        title={section.title}
        description={section.description}
        code={section.code}
        color={color}
        table={section.table}
      />
    );
  });
  return (
    <main id={id} className="flex flex-wrap max-w-4xl gap-10 mx-auto">
      {chapter && (
        <h1 className="w-full text-4xl text-center text-white uppercase font-kreon">
          {chapter}
        </h1>
      )}
      {sectionEls}
    </main>
  );
};
Chapter.propTypes = {
  id: PropTypes.string,
  sections: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  color: PropTypes.string,
};

export default Chapter;
