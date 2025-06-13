import PropTypes from "prop-types";

const Footer = ({ theme }) => {
  return (
    <footer className="my-5 text-sm text-center text-neutral-100">
      <p>
        Stworzone przez{" "}
        <a
          className={"underline " + theme.text.normal}
          href="https://github.com/karimink">
          Karimin
        </a>
      </p>
    </footer>
  );
};
Footer.propTypes = {
  theme: PropTypes.object,
};

export default Footer;
