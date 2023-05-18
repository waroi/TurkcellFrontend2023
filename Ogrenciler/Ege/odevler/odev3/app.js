import Request from "./Classes/request.js";

const request = new Request();

const url = "http://localhost:3000/blogs";
const postData = {
  author: "mEge Karam",
  title: "mEge-Merver",
  text: "morem mipsum molor",
};

// request
//   .get("http://localhost:3000/blogs")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

addData.addEventListener("click", () => {
  request
    .post(url, postData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
});
