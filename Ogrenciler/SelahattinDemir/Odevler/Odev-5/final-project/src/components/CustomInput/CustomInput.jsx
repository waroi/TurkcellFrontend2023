import PropTypes from "prop-types";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
        value={field.value || ""}
        className={meta.error ? "input-error" : ""}
      />

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomInput;
