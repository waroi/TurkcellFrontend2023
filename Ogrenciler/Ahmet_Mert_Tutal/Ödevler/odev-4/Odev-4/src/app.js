const addModal = document.querySelector("#addNewPostModal");
const postAuthorInput = document.querySelector("#postAuthorInput");
const postContentInput = document.querySelector("#postContentInput");
const postCategoryInput = document.querySelector("#postCategoryInput");
const urlInput = document.querySelector("#urlInput");
const postList = document.querySelector("#post-list");
const deleteButton = document.querySelector("#deletePost");
const updateButton = document.querySelector("#updateButton");
const readMore = document.querySelector("#readMore");
const searchInput = document.querySelector('#searchInput');
const categories = document.querySelector('.categories');
const mobileCategories = document.querySelector('.mobileCategories');
const goHome = document.querySelector('#goHome');
const sortAz = document.querySelector('#sortAz');
const sortZa = document.querySelector('#sortZa');
const sortLatest = document.querySelector('#latest');
const sortOldest = document.querySelector('#oldest');
const productPriceInput = document.querySelector('#PriceInput');
const addBasket = document.querySelector('#addListButton');



const request = new Request("http://localhost:3000/posts");
const request2 = new Request("http://localhost:3001/card");


const ui = new UI();

getAllItems();
eventListeners();

function eventListeners() {

    addListButton.addEventListener('click', addPost);
    postList.addEventListener('click', deletePost);
    postList.addEventListener('click', updatePost);
    searchInput.addEventListener('keyup', searchPost);
    categories.addEventListener('click', filterPost);
    mobileCategories.addEventListener('click', filterPost);
    sortAz.addEventListener('click', sortPostAz);
    sortZa.addEventListener('click', sortPostZa);
    sortLatest.addEventListener('click', sortPostLatest);
    sortOldest.addEventListener('click', sortPostOldest);
    addBasket.addEventListener('click', addBasketList);
}


function getAllItems() {
    request
        .get()
        .then((posts) => {
            ui.loadAllPostsToUI(posts);
        })
        .catch((err) => {
            console.log(err);
        });
}

function addPost(e) {
    console.log("add post");
    // const postTitle = postTitleInput.value.trim();
    const postAuthor = postAuthorInput.value.trim();
    const postContent = postContentInput.value.trim();
    const postCategory = postCategoryInput.value.trim();
    const productPrice = productPriceInput.value.trim();
    const url = urlInput.value.trim();

    if ( postAuthor==="" || postContent === "" || postCategory === "" || url === "" || productPrice === "") {
        ui.showAlert('Please fill in all fields!', 'danger');
    }
    else {
        request
            .post({
                author: postAuthor,
                content: postContent,
                category: postCategory,
                url: url,
                price: productPrice
            })
            .then((post) => {
                ui.addPostToUI(post);
                ui.showAlert('Post added successfully!', 'success');
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    }

    e.preventDefault();
}

function deletePost(e) {
    if (e.target.id === 'deletePost') {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        console.log("ID",id);
        request
            .delete(id)
            .then((message) => {
                console.log(message);
                ui.deletePostFromUI(e.target);
                ui.showAlert('Post deleted successfully!', 'danger');
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    }
    e.preventDefault();
};

function updatePost(e) {
    if (e.target.id === 'updatePost') {
        let updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
        updateModal.show();

        
        const updateAuthor = document.querySelector("#updateAuthor");
        const updateContent = document.querySelector("#updateContent");
        const updateCategory = document.querySelector("#updateCategory");
        const updateButton = document.querySelector("#updateButton");
        
        let url = "";
        let quantity = "";
        const price = document.querySelector("#UpdateInput");

        const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        const card = e.target.parentElement.parentElement.parentElement.parentElement;
        console.log("ID",id);
        request
            .get()
            .then((posts) => {
                posts.map(post => {
                    if (post.id == id) {
                        updateAuthor.value = post.author;
                        updateContent.value = post.content;
                        updateCategory.value = post.category;
                        url = post.url;
                        quantity = post.quantity;
                        price.value = post.price;
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });

        updateButton.addEventListener('click', function () {
            request
                .put(id, {
                    price: price.value,
                    author: updateAuthor.value,
                    content: updateContent.value,
                    category: updateCategory.value,
                    quantity: quantity,
                    url: url

                })
                .then((post) => {
                    ui.updatePostFromUI(post, card);
                    ui.showAlert('Post updated successfully!', 'success');

                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
            e.preventDefault();

        });
    }
    e.preventDefault();
}

function searchPost(e) {
    const searchValue = e.target.value.toLowerCase();
    ui.searchPostInUI(searchValue);
}

const filteredPosts = [];

function filterPost(e, filteredPosts) {
    this.filteredPosts = filteredPosts;
    filteredPosts = [];
    const category = e.target.id;
    ui.filterPostInUI(category, filteredPosts);
    e.preventDefault();
}

function sortPostAz(e) {
    const postList = document.querySelectorAll("#post-title");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    }
    );
    postListArray.map(function (post) {
        const card = post.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedPosts.push(card);
        }
    });
    ui.sortPost(sortedPosts);
    e.preventDefault();
}
function sortPostZa(e) {
    const postList = document.querySelectorAll("#post-title");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return b.textContent.localeCompare(a.textContent);
    }
    );

    postListArray.map(function (post) {
        const card = post.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedPosts.push(card);
        }
    });
    ui.sortPost(sortedPosts);
    e.preventDefault();
}

function sortPostLatest(e) {
    const postList = document.querySelectorAll("#post-date");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return b.textContent.localeCompare(a.textContent);
    }
    );
    postListArray.map(function (post) {
        const card = post.parentElement;
        if (card.parentElement.parentElement.parentElement.style.display !== "none") {
            sortedPosts.push(card.parentElement.parentElement.parentElement);
        }
    });
    ui.sortPost(sortedPosts);
    e.preventDefault();
}

function sortPostOldest(e) {
    const postList = document.querySelectorAll("#post-date");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    }
    );

    postListArray.map(function (post) {
        const card = post.parentElement;
        if (card.parentElement.parentElement.parentElement.style.display !== "none") {
            sortedPosts.push(card.parentElement.parentElement.parentElement);
        }
    });

    ui.sortPost(sortedPosts);
    e.preventDefault();
}




function addBasketList(e) {
    console.log("noliyy");
    if (
        e.target.className ===
        "btn btn-sm addCartButton   btn-warning"
      ) {
      const id = e.target.closest(".card-group").id;
      // Carta ekleme
      request.get().then((products) => {
        products.forEach(function (product) {
          if (product.id == id) {
            if (product.quantity > 0) {
                request2.get().then((baskets) => {
                const basket = baskets.find((basket) => basket.basketId == id);
                if (basket) {
                  if (product.quantity > basket.basketQuantity) {
                    request2
                      .put(basket.id, {
                        basketQuantity: basket.basketQuantity + 1,
                        basketTitle: basket.basketTitle,
                        basketUrl: basket.basketUrl,
                        basketPrice: basket.basketPrice,
                        basketCategory: basket.basketCategory,
                        basketId: basket.basketId,
                      })
                      .then((updatedBasket) => {
                        console.log(updatedBasket);
                        getAllBasketItems();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                } else {
                    request2
                    .post({
                        basketQuantity: 1,
                      basketTitle: product.title,
                      basketUrl: product.url,
                      basketPrice: product.price,
                      basketCategory: product.category,
                      basketId: product.id,
                    })
                    .then((basket) => {
                      ui.addCartUI(basket);
                      getAllBasketItems();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              });
            }
          }
        });
      });
    }
  }
  