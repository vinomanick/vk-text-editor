import "./Button.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      <h4>{props.label}</h4>
    </button>
  );
};

Button.propTypes = {
  kind: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
