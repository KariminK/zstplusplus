import PropTypes from "prop-types";
const Label = ({ text, htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-white text-xl my-2 flex justify-between items-center  gap-5"
    >
      {text}
      {children}
    </label>
  );
};
Label.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.element,
};
export default Label;
