import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ theme, img, to, text }) => {
  const linkStyles = `border-2 flex justify-center text-4xl overflow-hidden font-code font-bold items-center relative 
    ${theme} w-80 h-96 rounded-lg hover:shadow-lg hover:-translate-y-2 transition-shadow  transition-transform`;
  return (
    <Link className={linkStyles} to={to}>
      <img
        src={img}
        className="absolute -z-10 top-2 blur-xs brightness-75 contrast-[120%]"
        alt=""
      />
      {text}
    </Link>
  );
};
Card.propTypes = {
  theme: PropTypes.string,
  img: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
