function Checkbox() {}

Checkbox.prototype.addCheckboxFromCheckbox = function (checkbox) {
  return `
  <label class="text-light">
  <input type="checkbox" name="categoriesandauthors" value=${checkbox.replace(
    / /g,
    ""
  )} />
  ${checkbox}
</label>
  `;
};
