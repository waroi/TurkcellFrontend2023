//json 

class Operation {

  // verilen categoryid ye göre blog döndürür
  static getBlogByCategory(categoryId) {
    let request = new Request();
    request.getRequest("http://localhost:3000/blog?category=" + categoryId)
      .then(data => {
        UI.addBlogToUI(data);
      })
      .catch(err => console.log(err))
  }

  // tüm blogları döndürür
  static getAllBlogs() {
    let request = new Request();
    request.getRequest("http://localhost:3000/blog")
      .then(data => {
        UI.addBlogToUI(data);
      })
      .catch(err => console.log(err))
  }


  static getBlogById(id, operation) {
    let request = new Request();
    request.getRequest("http://localhost:3000/blog/" + id)
      .then(data => {
        if (operation == "updateForm") {
          UI.fillForm(data);
        }
        else {
          UI.showDetail(data)
        }


      })
      .catch(err => console.log(err))
  }

  static saveBlog(blog) {
    let request = new Request();
    request.postRequest("http://localhost:3000/blog", blog)
      .catch(err => console.log(err))
  }

  static deleteBlog(id) {
    console.log(id);
    let request = new Request();
    request.deleteRequest("http://localhost:3000/blog/" + id)
      .catch(err => console.log(err))
  }

  static updateBlog(id, blog) {
    let request = new Request();
    request.putRequest("http://localhost:3000/blog/" + id, blog)
      .catch(err => console.log(err))
  }
}



