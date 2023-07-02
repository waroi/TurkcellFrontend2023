import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../redux/slices/productSlice'
import { CustomInput,StyledTextArea } from './styled'
import { useFormik } from 'formik'
import { addProductSchema } from '../../schemas'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSubmit = async (values, actions) => {
    await dispatch(addProducts(values))
    await navigate("/")
    await toast.success("Product Sended", {
      autoClose: 2000,
    });
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };
let count = Math.floor(Math.random() * 100000000);
  const formik = useFormik({
    initialValues: {
      id: count ,
      title: "",
      price: "",
      description: "",
      category: "",
      image: "../../../images/base.jpg",
      rate: "",
      count: "",

    },
    validationSchema: addProductSchema
    ,
    onSubmit
  });

  return (
    <div>
      <div className=" position-relative">
        <ToastContainer />
        <div className="container">
          <form onSubmit={formik.handleSubmit} className='d-flex flex-column align-items-center'>
            <div className=" row justify-content-start text-start">
              <div className="col-12">
              <h3 className='h3 mb-4 mt-120 pt-5 text-primary fw-semibold'>Add New Product</h3>
              </div>
              <div className='col-12 col-lg-6 rounded-5 px-175  '>
                
                <label htmlFor="username">Title:</label>
                <CustomInput
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  placeholder='Please Enter a title...'
                  className={`${formik.errors.title ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.username && <div className='text-danger error'>{formik.errors.username}</div>}

                <label className='mt-4' htmlFor="password">price:</label>
                <CustomInput
                  id="price"
                  name="price"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  placeholder='Please Enter price'
                  className={`${formik.errors.price ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.password && <div className='text-danger error'>{formik.errors.password}</div>}

                <label className='mt-4' htmlFor="password">category:</label>
                <CustomInput
                  id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  placeholder='Please Enter category'
                  className={`${formik.errors.category ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.password && <div className='text-danger error'>{formik.errors.password}</div>}
                <label className='mt-4' htmlFor="password">description:</label>
                <StyledTextArea
                  id="description"
                  name="description"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder='Please Enter description'
                  className={`${formik.errors.description ? "border-1 border-danger" : ""} w-100 rounded-4 p-2 mt-2 shadow-sm`}
                />
                {formik.errors.password && <div className='text-danger error'>{formik.errors.password}</div>}
                <label className='mt-4' htmlFor="password">price:</label>

              </div>
              <div className='col-12 col-lg-6 rounded-5  px-175  '>
                <label className='' htmlFor="password">image Url:</label>
                <div className='font-italic fs-6 text-danger mt-2'>if you did not add any image, base image will be automaticly added.</div>
                <CustomInput
                  id="image"
                  name="image"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                  placeholder='Please Enter image Url'
                  className={`${formik.errors.image ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.password && <div className='text-danger error'>{formik.errors.password}</div>}

               
               
                <label className='mt-4' htmlFor="password">rate:</label>
                <CustomInput
                  id="rate"
                  name="rate"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.rate}
                  placeholder='Please Enter rate'
                  className={`${formik.errors.rate ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.rate && <div className='text-danger error'>{formik.errors.rate}</div>}
                <label className='mt-4' htmlFor="password">count:</label>
                <CustomInput
                  id="count"
                  name="count"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.count}
                  placeholder='Please Enter count'
                  className={`${formik.errors.count ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.password && <div className='text-danger error'>{formik.errors.password}</div>}

              </div>
              <div className='col-3 pb-5 '>
              <button disabled={formik.isSubmitting} className='mt-4 btn btn-primary rounded-pill py-2 px-175' type="submit">
                  {formik.isSubmitting ?
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div> : "Submit"
                  }
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default AddProduct