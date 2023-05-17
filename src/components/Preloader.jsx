import PropTypes from "prop-types";
function Preloader({ text }) {
  return (
    <div>
      <h3>{text}</h3>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}

Preloader.propTypes = {
  text: PropTypes.string,
};

export { Preloader };
