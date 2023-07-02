import * as yup from 'yup'

const footerSchema = yup.object().shape({
    footerEmail: yup
    .string()
    .email('Geçerli bir e-posta adresi giriniz.')
    .required('E-Posta adresi boş bırakılamaz.'),
});

export default footerSchema;