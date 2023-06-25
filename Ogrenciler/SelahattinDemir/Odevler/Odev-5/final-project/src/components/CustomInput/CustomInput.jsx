import Proptypes from "prop-types";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

CustomInput.propTypes = {
  label: Proptypes.string.isRequired,
};

export default CustomInput;
