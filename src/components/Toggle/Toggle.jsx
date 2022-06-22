import PropTypes from "prop-types";
import "./Toggle.css";

const IDLE_FUNCTION = () => {};

export function Toggle({
  defaultValue = false,
  onChange = IDLE_FUNCTION,
  onText = "On",
  offText = "Off",
  disabled = false,
}) {
  const disabledClass = disabled ? "toggle-disabled" : "";
  return (
    <div className={`${disabledClass} toggle-wrap`}>
      {onText}
      <label>
        <input
          disabled={disabled}
          className="toggler"
          type="checkbox"
          data-toggle="toggle"
          defaultChecked={defaultValue}
          onChange={onChange}
        />
        <div className="toggle">
          <div className="handle">
            <div className="bars" />
          </div>
        </div>
      </label>
      {offText}
    </div>
  );
}

Toggle.propTypes = {
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
  onText: PropTypes.string,
  offText: PropTypes.string,
};
