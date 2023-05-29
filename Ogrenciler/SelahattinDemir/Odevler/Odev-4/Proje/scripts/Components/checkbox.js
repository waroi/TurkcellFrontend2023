class Checkbox {
  static addCheckboxFromCheckbox(checkbox) {
    return `
  <label class="form-check category mb-2">
    <input class="form-check-input" type="checkbox" name="categoriesandbrands" value=${checkbox.replace(
      / /g,
      ""
    )} /> 
    <span class="form-check-label">${checkbox}</span>
  </label>`;
  }
}

export default Checkbox;
