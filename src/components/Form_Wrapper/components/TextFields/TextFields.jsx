import { EMPTY_FUNCTION } from "../../../../config/freezeObjects";

const TextFields = ({
  className = "",
  disabled = false,
  error = "",
  id = "",
  label = "",
  name = "",
  placeholder = "",
  readOnly = "",
  type = "",
  value = "",
  onChange = EMPTY_FUNCTION,
}) => {
  const handleChange = (event) => {
    onChange({ id, value: event.target.value });
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input
        className={`border my-2 p-2 ${className}`}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        value={value}
      />
    </div>
  );
};

export default TextFields;
