import MyAlert from '../Utilities/alert.js';
import App from '../Models/App.js';

const app = new App();
app.load();
if (localStorage.getItem('userLogin') != null) {
 app.loginUser('local');
}
signup.addEventListener('click', (e) => {
 e.preventDefault();
 e.preventDefault();
 if (username.value == '' || password.value == '') {
  MyAlert.Start('welcomeAlert', 'Please fill in all fields', 'danger');
  return;
 } else {
  app.signUpUser();
 }
});

login.addEventListener('click', (e) => {
 e.preventDefault();
 if (username.value == '' || password.value == '') {
  MyAlert.Start('welcomeAlert', 'Please fill in all fields', 'danger');
  return;
 } else {
  app.loginUser('button');
 }
});
