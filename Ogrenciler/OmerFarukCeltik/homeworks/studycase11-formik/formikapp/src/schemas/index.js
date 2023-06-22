import * as yup from "yup";
const passwordRules = /^(?=.*[a-z]).{5,}$/; 


export const FormSchema = yup.object().shape({
username: yup.string().min(5,"Username must be greater than 5").required("Please enter a real username"),
age: yup.number().max(2, "Please enter a real age").positive("age can not be equal to negative numbers.").integer("age can not be equal to decimals").required("please enter a real age"),
password:yup.string().min(5,"password must be greater than 5").matches(passwordRules, 
  {message: "Lütfen en az 1 küçük harf minimum 5 karakter giriniz",
}).required("password can not be empty"),
confirmpassword:yup.string().oneOf([yup.ref("password")], "Şifreler eşleşmiyor").required("password can not be empty"),

})