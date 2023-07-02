import * as yup from "yup";

const updateProductSchema = yup.object().shape({
  modalProductName: yup.string().required("Ürün adı boş olamaz."),
  modalProductDescription: yup.string().required("Ürün açıklaması boş olamaz."),
  modalProductImage: yup
    .string()
    .url("Geçerli bir resim adresi giriniz.")
    .required("Ürün resmi boş olamaz."),
  modalProductPrice: yup
    .number()
    .min(0, "Ürün fiyatı 0'dan küçük olamaz.")
    .required("Ürün fiyatı boş olamaz."),
  modalProductStock: yup
    .number()
    .min(0, "Stok adedi 0'dan küçük olamaz.")
    .required("Stok adedi boş olamaz."),
  modalProductRate: yup
    .number()
    .min(0, "Ürün puanı 0'dan küçük olamaz.")
    .max(5, "Ürün puanı 5'ten büyük olamaz.")
    .required("Ürün puanı boş olamaz."),
  modalProductCategory: yup.string().required("Ürün kategorisi boş olamaz."),
});

export default updateProductSchema;
