class Checkbox {
  static addCheckboxFromCheckbox(checkbox) {
    return `
  <label class="ms-2 fs-6  checkbox">
    <input type="checkbox" name="categoriesandauthors" value=${checkbox.replace(
      / /g,
      ""
    )} /> 
    ${checkbox}
  </label>`;
  }
}
