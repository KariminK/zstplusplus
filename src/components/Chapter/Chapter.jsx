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
  // Z tego co kojarzę to useNavigate nie działa w ten sposób w v6, nie przyjmuje żadnych argumentów
  useNavigate(() => {
    if (chapter === "" || !(chapter in sections)) {
      navigate("./notFound");
    }
  });

  // Takie praktyki sprawiają że kod jest bardzo nieczytelny, skoro używamy Array.map możemy przypisać jej rezultat do nowej zmiennej
  // np. const sectionEls = sections.map((section) => {...}); i usunąć deklarację sectionEls z 5 linijki
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
  sections: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  color: PropTypes.string,
};

export default Chapter;
