import { useField } from "formik";

// eslint-disable-next-line react/prop-types
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
