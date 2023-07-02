/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import footerSchema from "../../../schemas/footerSchema";
import Toast from "../../../common/Toast/Toast";
import FormError from "../../../common/FormError/FormError";
const FooterForm = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      footerEmail: "",
    },
    validationSchema: footerSchema,
    onSubmit: async (values, bag) => {
      Toast({
        message: "Mail adresiniz başarıyla kaydedildi",
        type: "success",
      });
      bag.resetForm();
    },
  });

  return (
    <div className="container footerForm">
      <div className="row align-items-center">
        <div className="col-lg-4 col-12">
          <h4 className="fw-bold text-capitalize">
            Register now so you don't miss our programs
          </h4>
        </div>
        <div className="col-lg-8 col-12 bg-white formWrapper">
          <div className="gap-2 gap-lg-0">
            <form onSubmit={handleSubmit} className="row">
              <div className="position-relative col-lg-9">
                <input
                  type="email"
                  id="footerEmail"
                  name="footerEmail"
                  placeholder="Enter your Email"
                  className="form-control shadow-none border-secondary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.footerEmail}
                  disabled={isSubmitting}
                />
                {touched.footerEmail && errors.footerEmail && <FormError message={errors.footerEmail} />}
              </div>
              <div className="col-lg-3 mt-lg-0 mt-4">
                <button className="btn" type="submit">
                  Subcribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
