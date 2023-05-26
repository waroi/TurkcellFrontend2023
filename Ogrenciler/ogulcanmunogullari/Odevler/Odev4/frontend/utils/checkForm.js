function checkForm() {
 if (
  brandInput.value == '' ||
  logoInput.value == '' ||
  image1Input.value == '' ||
  image2Input.value == '' ||
  image3Input.value == '' ||
  titleInput.value == '' ||
  subTitleInput.value == '' ||
  priceInput.value == '' ||
  stockInput.value == ''
 ) {
  return true;
 } else {
  return false;
 }
}
export default checkForm;
