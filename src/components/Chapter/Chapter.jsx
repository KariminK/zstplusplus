import PropTypes from "prop-types";
const Chapter = ({ id }) => {
  return <main id={id}></main>;
};
Chapter.propTypes = {
  id: PropTypes.string,
};

export default Chapter;
