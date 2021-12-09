import "./Button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
      data-id={props.id}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <h4>{props.label}</h4>
    </button>
  );
};

Button.propTypes = {
  kind: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
