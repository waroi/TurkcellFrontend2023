import BasicInput from '../../components/elements/inputs/BasicInput'
import { MainDiv, FormDiv, InputDiv } from './style'
import ToastText from '../Elements/toast/ToastText'
import FetchTool from '../../utils/fetchTool';
import BasicButton from '../Elements/buttons/BasicButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { mode } from '../../redux/Slicers/adminSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
const EditSection = ({ product }) => {
 const [product1, setProduct1] = useState({});
 const dispatch = useDispatch();

 useEffect(() => {
  setProduct1(product);
 }, [product]);

 const formik = useFormik({
  initialValues: {
   title: product1.title || '',
   price: product1.price || '',
   description: product1.description || '',
   image: product1.image || '',
   category: product1.category || '',
   rate: product1.rating?.rate || '',
   count: product1.rating?.count || '',
  },
  enableReinitialize: true,
  validationSchema: Yup.object({
   title: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
   price: Yup.number()
    .min(0, 'Must be 0 characters or more')
    .required('Required'),
   description: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
   image: Yup.string()
    .url('Invalid url')
    .required('Required'),
   category: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
   rate: Yup.number()
    .min(0, 'Must be 0 characters or more')
    .required('Required'),
   count: Yup.number()
    .min(0, 'Must be 0 characters or more')
    .required('Required')
  }),
  onSubmit: (values) => {
   const newValues = {
    ...values, id: product1.id, rating: {
     rate: values.rate,
     count: values.count
    }
   }
   FetchTool.changeProduct(product1.id, newValues)
    .then(() => {
     dispatch(mode());
    })
  },
 }
 );



 return (
  <MainDiv>
   <FormDiv>
    <InputDiv>
     <label htmlFor='title'>
      Title:
     </label>
     <BasicInput>
      <input
       autoComplete="off"
       id='title'
       type="text"
       name="title" placeholder="Title"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.title}
      />
     </BasicInput>
     {
      formik.touched.title && formik.errors.title && (
       <ToastText color={"red"}>
        {formik.errors.title}
       </ToastText>
      )
     }
    </InputDiv>
    <InputDiv>
     <label htmlFor='price'>
      Price:
     </label>
     <BasicInput>
      <input

       autoComplete="off"
       id='price'
       type="number"
       name="price" placeholder="Price"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.price}
      />
     </BasicInput>
     {
      formik.touched.price && formik.errors.price && (
       <ToastText color={"red"}>
        {formik.errors.price}
       </ToastText>
      )
     }
    </InputDiv>
    <InputDiv>
     <label htmlFor='description'>
      Description:
     </label>
     <BasicInput>
      <textarea

       autoComplete="off"
       id='description'
       type="text"
       name="description" placeholder="Description"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.description}
      />
     </BasicInput>
     {
      formik.touched.description && formik.errors.description && (
       <ToastText color={"red"}>
        {formik.errors.description}
       </ToastText>
      )
     }
    </InputDiv>
    <InputDiv>
     <label htmlFor='image'>
      Image:
     </label>
     <BasicInput>
      <input

       autoComplete="off"
       id='image'
       type="url"
       name="image" placeholder="Image"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.image}
      />
     </BasicInput>
     {
      formik.touched.image && formik.errors.image && (
       <ToastText color={"red"}>
        {formik.errors.image}
       </ToastText>
      )
     }
    </InputDiv>
    <InputDiv>
     <label htmlFor='category'>
      category:
     </label>
     <BasicInput>
      <select

       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.category}
       id='category'
       name="category"
      >
       <option value="men's clothing">men&lsquo;s clothing</option>
       <option value="jewelery">jewelery</option>
       <option value="electronics">electronics</option>
       <option value="women's clothing">women&lsquo;s clothing</option>
      </select>
     </BasicInput>
     {
      formik.touched.category && formik.errors.category && (
       <ToastText color={"red"}>
        {formik.errors.category}
       </ToastText>
      )
     }
    </InputDiv>
    <InputDiv>
     <label htmlFor='rate'>
      Rate:
     </label>
     <BasicInput>
      <input

       autoComplete="off"
       id='rate'
       type="number"
       name="rate" placeholder="Rate"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.rate}
      />
     </BasicInput>
     {
      formik.touched.rate && formik.errors.rate && (
       <ToastText color={"red"}>
        {formik.errors.rate}
       </ToastText>
      )
     }
    </InputDiv>
    <InputDiv>
     <label htmlFor='count'>
      Count:
     </label>
     <BasicInput>
      <input

       autoComplete="off"
       id='count'
       type="number"
       name="count" placeholder="Count"
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       value={formik.values.count}
      />
     </BasicInput>
     {
      formik.touched.count && formik.errors.count && (
       <ToastText color={"red"}>
        {formik.errors.count}
       </ToastText>
      )
     }
    </InputDiv>
    <div className='butDiv'>
     <div onClick={formik.handleSubmit}>
      <BasicButton >
       Save
      </BasicButton>
     </div>
     <div onClick={() => dispatch(mode())}>
      <BasicButton color={"#d4ad00"} hover={"#ffd20b"}>
       Close Without Save
      </BasicButton>
     </div>
    </div>
   </FormDiv>
  </MainDiv>
 )
}

EditSection.propTypes = {
 product: PropTypes.object,
}

export default EditSection
















