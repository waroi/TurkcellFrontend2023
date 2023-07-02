/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { InputDiv } from "../../AuthStyle"
import FormError from "../../../../common/FormError/FormError"
import Button from "../../../../common/Button/Button"
const RegisterForm = ({handleSubmit, handleChange, handleBlur, values, isSubmitting, touched, errors}) => {
  return (
    <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <InputDiv className="position-relative">
                  <label htmlFor="registerFirstName"></label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="registerFirstName"
                    name="registerFirstName"
                    placeholder="Adınız..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.registerFirstName}
                    disabled={isSubmitting}
                  />
                  {touched.registerFirstName && errors.registerFirstName && (
                    <FormError message={errors.registerFirstName} />
                  )}
                </InputDiv>
              </div>
              <div className="col-lg-6 col-12">
                <InputDiv className="position-relative">
                  <label htmlFor="registerLastName"></label>
                  <input
                    type="text"
                    id="registerLastName"
                    name="registerLastName"
                    placeholder="Soyadınız..."
                    className="form-control shadow-none border-secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.registerLastName}
                    disabled={isSubmitting}
                  />
                  {touched.registerLastName && errors.registerLastName && (
                    <FormError message={errors.registerLastName} />
                  )}
                </InputDiv>
              </div>
            </div>
            <InputDiv className="position-relative my-3">
              <label htmlFor="registerEmail"></label>
              <input
                type="email"
                className="form-control shadow-none border-secondary"
                id="registerEmail"
                name="registerEmail"
                placeholder="E-posta adresiniz..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.registerEmail}
                disabled={isSubmitting}
              />
              {touched.registerEmail && errors.registerEmail && (
                <FormError message={errors.registerEmail} />
              )}
            </InputDiv>
            <InputDiv className="position-relative">
              <label htmlFor="registerPassword"></label>
              <input
                type="password"
                className="border-secondary shadow-none form-control"
                id="registerPassword"
                name="registerPassword"
                placeholder="Şifreniz..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.registerPassword}
                disabled={isSubmitting}
              />
              {touched.registerPassword && errors.registerPassword && (
                <FormError message={errors.registerPassword} />
              )}
            </InputDiv>
            <InputDiv className="position-relative my-3">
              <label htmlFor="confirmRegisterPassword"></label>
              <input
                type="password"
                className="border-secondary shadow-none form-control"
                id="confirmRegisterPassword"
                name="confirmRegisterPassword"
                placeholder="Şifreniz Tekrar..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmRegisterPassword}
                disabled={isSubmitting}
              />
              {touched.confirmRegisterPassword &&
                errors.confirmRegisterPassword && (
                  <FormError message={errors.confirmRegisterPassword} />
                )}
            </InputDiv>
            <div>
              <Button
                disabled={isSubmitting}
                type="submit"
                padding=".5rem 1.75rem"
                buttonText="Kayıt Ol"
                color="#FDFDFD"
                backgroundcolor="#003459"
                className="mt-4"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <p className="mt-3 fst-italic">Sosyal Medya ile Üye Ol</p>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                  <BsFacebook />
                </button>
                <button className="btn btn-outline-info d-flex justify-content-center align-items-center">
                  <FcGoogle />
                </button>
                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                  <BsTwitter />
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <p className="mt-3 fst-italic">Zaten bir hesabınız var mı?</p>
              <Link
                to={"/auth/login"}
                className="text-decoration-none fst-normal"
              >
                Giriş Yap
              </Link>
            </div>
          </form>
  )
}

export default RegisterForm