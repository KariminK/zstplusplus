import PropTypes from "prop-types";
import CodeSection from "../CodeSection/CodeSection";
const Chapter = ({ id, sections }) => {
  let sectionEls = [];
  if (Array.isArray(sections)) {
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
  }
  return <main id={id}>{sectionEls}</main>;
};
Chapter.propTypes = {
  id: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.object),
};

export default Chapter;
