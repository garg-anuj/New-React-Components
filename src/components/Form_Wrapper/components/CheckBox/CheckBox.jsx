import { EMPTY_FUNCTION } from "../../../../config/freezeObjects";

const CheckBox = ({
  id = "",
  checked = "",
  className = "",
  disabled = false,
  label = "",
  name = "",
  readOnly = "",
  value = "",
  onChange = EMPTY_FUNCTION,
}) => {
  const handleChange = (event) => {
    onChange({ id, checked, value: event.target.value });
  };

  return (
    <div className="cursor-pointer">
      <input
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        readOnly={readOnly}
        type="checkbox"
        value={value}
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
