export class Validation {
  constructor() {
  }
  urlCheck(input) {
    let regexTest = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
    if (!regexTest.test(input.value.trim())) {
      return false;
    }
    return true;
  }
  inputCheck(input) {
    if (input.value.trim() === "") {
      return false;
    }
    return true;
  }
}
