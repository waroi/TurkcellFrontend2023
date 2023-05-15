function Checkbox() {}

Checkbox.prototype.addCheckboxFromCheckbox = function (checkbox) {
  return `
  <label class="ms-2 text-light checkbox">
    <input type="checkbox" name="categoriesandauthors" value=${checkbox.replace(
    / /g,
    ""
    )} /> 
    ${checkbox}
  </label>`;
};
