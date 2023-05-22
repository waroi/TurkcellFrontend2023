const container = document.querySelector(".blogs-row");
const searchInput = document.getElementById("searchInput");
const orderByTitle = document.getElementById("orderByTitle");
const orderByWriter = document.getElementById("orderByWriter");
const orderByDate = document.getElementById("orderByDate");
const filter = document.querySelector("select");

const deleteButton = document.querySelector(".blogs-row");
const deletePost = async (e) => {
    let modalId = e.target.parentElement.parentElement.parentElement.parentElement.id;
    if (e.target.classList.contains("deleteButton")) {
        console.log("delete fonk")
        await fetch('http://localhost:3000/posts/' + modalId, {
            method: "DELETE",
        })

        window.location.replace('/index.html');
    }
    e.preventDefault();
}
deleteButton.addEventListener("click", deletePost);


const renderPosts = async (term, uri) => {
    let url = "http://localhost:3000/posts?";

    if (term) {
        url += `q=${term}`;
    }

    if (uri) {
        url = uri;
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Bir hata olustu.");
    }

    const posts = await response.json();
    let cards = '';
    posts.forEach(post => {
        console.log(post.id)
        cards += `<div  style="background-color: #F9F1F0; box-shadow: 2px 2px 3px #AA1945;" class="card mb-5" id="${post.id}">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${post.picture} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <h5 class="card-title">${post.writer}</h5>
          <p class="card-text">${post.writing.slice(0, 200)}</p>
          <p class="card-text"><small class="text-muted">${post.dateAndTime} - ${post.category}</small></p>
          <button style="background-color: #F9CCD3" type="button" class="btn readMore" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Read more...
          </button>
         <a href="/updateBlog.html?id=${ post.id }"> <button style="background-color: #F9CCD3" id="updateButton" type="button" class="btn deleteButton">
            Update
          </button></a>
          <button style="background-color: #AA1945;" id="deleteButton" type="button" class="btn deleteButton text-light">
            Delete
          </button>
         
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 id="modalTitle" class="modal-title fs-5" id="exampleModalLabel"></h1>
                  <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <h4 style="margin-left:10px" id="modalWriter"></h4>
                <h4 style="color:gray; margin-left:10px" id="modalCategory"></h4>
                <p id="modalWriting" class="modal-body">     
                <p>
        <img width="100%" id="modalPicture" class="img-fluid rounded-start" alt="...">
        <div class="modal-footer">
        <button style="background-color: #AA1945; color:white;" type="button" class="btn" data-bs-dismiss="modal">Close</button>
      </div>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    });
 
    container.innerHTML = cards;
    const readMoreButtons = document.querySelectorAll(".readMore");
    console.log(readMoreButtons);

    const detailModal = (e) => {
        let modalId = e.target.parentElement.parentElement.parentElement.parentElement.id; 
        fetch(`http://localhost:3000/posts/${modalId}`)
            .then((response) => response.json())
            .then((data) =>
            {
                console.log(data)
                showDefaultInfo(data);
            } 
            )
            .catch((err) => console.log(err));
        }
        readMoreButtons.forEach((readMoreButton) => {
        readMoreButton.addEventListener("click", detailModal);
    })
}

const filterFunc = async () => {
  let filteredPosts = [];
  fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((posts) => {
          filteredPosts = posts.filter(function (post) {
              return post.category == filter.value;
          }
          );
          let cards = '';
          filteredPosts.forEach(post => {
              cards += `<div  style="background-color: #F9F1F0; box-shadow: 2px 2px 3px #AA1945;" class="card mb-5" id="${post.id}">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src=${post.picture} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <h5 class="card-title">${post.writer}</h5>
                    <p class="card-text">${post.writing.slice(0, 200)}</p>
                    <p class="card-text"><small class="text-muted">${post.dateAndTime} - ${post.category}</small></p>
                    <button style="background-color: #F9CCD3" type="button" class="btn readMore" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Read more...
                    </button>
                   <a href="/updateBlog.html?id=${ post.id }"> <button style="background-color: #F9CCD3" id="updateButton" type="button" class="btn deleteButton">
                      Update
                    </button></a>
                    <button style="background-color: #AA1945;" id="deleteButton" type="button" class="btn deleteButton text-light">
                      Delete
                    </button>
                   
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 id="modalTitle" class="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <h4 style="margin-left:10px" id="modalWriter"></h4>
                          <h4 style="color:gray; margin-left:10px" id="modalCategory"></h4>
                          <p id="modalWriting" class="modal-body">     
                          <p>
                  <img width="100%" id="modalPicture" class="img-fluid rounded-start" alt="...">
                  <div class="modal-footer">
                  <button style="background-color: #AA1945; color:white;" type="button" class="btn" data-bs-dismiss="modal">Close</button>
                </div>
                  </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
          });
          container.innerHTML = cards;
          const readMoreButtons = document.querySelectorAll(".readMore");
    console.log(readMoreButtons);

    const detailModal = (e) => {
        let modalId = e.target.parentElement.parentElement.parentElement.parentElement.id; 
        fetch(`http://localhost:3000/posts/${modalId}`)
            .then((response) => response.json())
            .then((data) =>
            {
                console.log(data)
                showDefaultInfo(data);
            } 
            )
            .catch((err) => console.log(err));
        }
        readMoreButtons.forEach((readMoreButton) => {
        readMoreButton.addEventListener("click", detailModal);
    })
      })
      .catch((err) => console.log(err));
}

filter.addEventListener("change", filterFunc);

    const showDefaultInfo = (data) => {
    document.getElementById("modalTitle").innerHTML = data.title;
    document.getElementById("modalWriting").innerHTML = data.writing;
    document.getElementById("modalPicture").src = data.picture;
    document.getElementById("modalWriter").innerHTML = data.writer;
    document.getElementById("modalCategory").innerHTML = data.category;
    console.log(data);
}

const searchByTitleOrWriter = async (e) => {
    e.preventDefault();
    renderPosts(searchInput.value.trim())

}
const orderByTitleFunc = async (e) => {
    e.preventDefault();
    renderPosts("", "http://localhost:3000/posts?_sort=title")

}
const orderByWriterFunc = async (e) => {
    e.preventDefault();
    renderPosts("", "http://localhost:3000/posts?_sort=writer")

}
const orderByDateFunc = async (e) => {
    e.preventDefault();
    renderPosts("", "http://localhost:3000/posts?_sort=dateAndTime")
}


orderByTitle.addEventListener("click", orderByTitleFunc);
orderByDate.addEventListener("click", orderByDateFunc);
orderByWriter.addEventListener("click", orderByWriterFunc);
searchInput.addEventListener("keyup", searchByTitleOrWriter);

window.addEventListener("DOMContentLoaded", () => renderPosts());