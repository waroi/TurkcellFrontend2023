class MyAlert {
 static _Create(divID, message, type) {
  let div = document.getElementById(divID);
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
   `<div class="alert alert-${type} alert-dismissible" role="alert">`,
   `   <div>${message}</div>`,
   '   <button type="button" class="btn-close" id="alertClose" data-bs-dismiss="alert" aria-label="Close"></button>',
   '</div>',
  ].join('');
  div.classList.remove('d-none');
  div.append(wrapper);
 }
 static Start(divID, message, type) {
  let div = document.getElementById(divID);
  this._Create(divID, message, type);
  setTimeout(() => {
   alertClose.click();
   div.classList.add('d-none');
  }, 2000);
 }
}
export default MyAlert;
