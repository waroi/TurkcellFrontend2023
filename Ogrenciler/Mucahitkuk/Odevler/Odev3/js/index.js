import { Validation } from "./validation.js";
import { Request } from "./request.js";

const photoUrl = document.getElementById("getUrl");
const userName = document.getElementById("getUsername");
const userBtn = document.getElementById("userInfo");
const userForm = document.getElementById("userForms");
const loadingSpinner = document.getElementById("loading");
const loadingSpinner2 = document.getElementById("loading2");
const linkToSite = document.getElementById("go-site");

export class userProfile {
  createUser(e) {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    loadingSpinner.classList.add("d-flex", "text-danger");
    const name = userName.value.trim();
    const photo = photoUrl.value;
    if (!validation.httpcheck(photo) && name.length === 0) {
      loadingSpinner.classList.add("text-danger");
      userName.value = "Please enter a valid name";
      photoUrl.value = "Please enter a valid url";
      setTimeout(() => {
        loadingSpinner.classList.remove("text-danger");
        loadingSpinner.classList.add("d-none");
        userName.value = "";
      }, 3000);
      return;
    } else {
      loadingSpinner.classList.remove("text-danger");
      loadingSpinner.classList.add("text-success");
    }
    const newData = {
      id: parseInt(Math.random() * 1000),
      name: name,
      profileImg: photo,
    };
    console.log(newData);
    userForm.reset();
    setTimeout(() => {
      request
        .post("profile", newData)
        .then((data) => {
          console.log(data, "Data added successfully");
        })
        .catch((err) => console.log(err));
    }, 3000);
  }
  getProfile(event) {
    event.preventDefault();
    request
      .get("profile")
      .then((data) => {
        if (data.length === 0) {
          alert("Create an account to continue");
        } else {
          loadingSpinner2.classList.remove("d-none");
          const currentPath = window.location.pathname;
          const basePath = currentPath.replace(/\/index\.html$/, "/");
          window.location.href = basePath + "page/mainpage.html";
        }
      })
      .catch((err) => console.log(err));
  }
}

const baseUrl = "http://localhost:3000";
const request = new Request(baseUrl);
const users = new userProfile();
const validation = new Validation(photoUrl);

linkToSite.addEventListener("click", users.getProfile);

userBtn.addEventListener("click", users.createUser.bind(users));
