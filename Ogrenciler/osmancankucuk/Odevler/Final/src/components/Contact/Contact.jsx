import { contactSchema } from "../../schemas";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { ContactForm, ContactInfo } from "./ContactStyle";
import Button from "../Button/Button";

const ContactUsPage = () => {
  const onSubmit = () => {
    toast("Message has sent!");
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });
  return (
    <div className="container">
      <h1 className="text-center">Contact Us</h1>
      <div
        style={{ backgroundColor: "#003459" }}
        className="row mt-4 rounded-4"
      >
        <ContactInfo className="col-md-6 d-flex flex-column justify-content-center">
          <div className="contactParagraph">
            <h3 style={{ color: "#003459" }} className="fw-bold">
              Get in Touch
            </h3>
            <hr />
            <p className="contactText">
              If you have any questions or need assistance, please feel free to
              contact us using the information below.
            </p>
            <ul className="list-unstyled contact-info contactList">
              <li>info@example.com</li>
              <li>123-456-7890</li>
              <li>1234 Main Street, City, Country</li>
            </ul>
          </div>
        </ContactInfo>
        <ContactForm className="col-md-6">
          <h3 className="fw-bold">Send Us a Message</h3>

          <form className="pt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                value={values.name}
                onChange={handleChange}
                className={errors.name ? "input-error input" : "input"}
                id="name"
                name="name"
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                className={errors.email ? "input-error input" : "input"}
                id="email"
                name="email"
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                value={values.message}
                onChange={handleChange}
                className={errors.message ? "input-error input" : " input"}
                id="message"
                name="message"
                required
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="d-flex justify-content-end">
              <Button color={"#003459"} title={"Submit"} />
            </div>
          </form>
        </ContactForm>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUsPage;
