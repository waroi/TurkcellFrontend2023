import Request from "./Classes/request.js";

const request = new Request();

const url = "http://localhost:3000/blogs";
const postData = {
  author: "mEge Karam",
  title: "mEge-Merver",
  text: "morem mipsum molor",
};
const editedPostData = {
  author: "lEge Karal",
  title: "lEge-Lerver",
  text: "lorem lipsum lolor",
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

editData.addEventListener("click", () => {
  request
    .put(url, editedPostData, 1)
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

deleteData.addEventListener("click", () => {
  request
    .delete(url, 1)
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
