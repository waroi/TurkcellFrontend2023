import { useField } from "formik";

function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={(meta.error ? "input-error" : "", "form-input")}
        />
        <span>I accept the terms of use</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
