import Request from "./Classes/request.js";

const request = new Request();

request
  .get("http://localhost:3000/blogs")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
