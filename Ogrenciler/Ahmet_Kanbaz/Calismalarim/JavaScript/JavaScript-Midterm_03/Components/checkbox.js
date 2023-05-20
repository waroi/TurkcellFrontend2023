class CheckBox {
  static addCheckBoxFromCheckBox(checkbox) {
    return `<li class = 'mb-2>
    <input type="checkbox" id="${checkbox}" class="btn-check" autocomplete="off">
    <label for="${checkbox}" class="btn btn-outline-success px-5" for="${checkbox}">${checkbox}</label>
  </li>`;
  }
}

export default CheckBox;