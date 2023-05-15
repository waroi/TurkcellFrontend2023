class Checkbox {
  static addCheckboxFromCheckbox(checkbox) {
    return `
  <label class="ms-2 fs-6 text-light checkbox">
    <input type="checkbox" name="categoriesandauthors" value=${checkbox.replace(
      / /g,
      ""
    )} /> 
    ${checkbox}
  </label>`;
  }
}
