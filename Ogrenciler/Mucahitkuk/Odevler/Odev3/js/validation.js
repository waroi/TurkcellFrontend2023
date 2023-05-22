export class Validation {
  constructor(input) {
    this.input = input;
  }
  httpcheck() {
    let regexTest = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
    if (!regexTest.test(this.input.value.trim())) {
      return false;
    }
    return true;
  }
  clear() {
    this.input.value = "";
  }
}
