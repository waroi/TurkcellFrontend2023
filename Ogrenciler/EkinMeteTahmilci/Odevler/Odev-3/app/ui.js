class UserInterface {
    addBlogToUI(newBlogObject) {

        var content = newBlogObject.content.split(' ');
        var shortContent = content.slice(0, 2).join(' ');

        if (content.length > 2) {
            shortContent += '...';
        }

        blogList.innerHTML += `<div class="col-4 col-sm-1 col-md-4 col-lg-4 mt-3 blog-item" dataID ="${newBlogObject.id}">
        <div class="card">
            <img class="card-img"
                src="${newBlogObject.image}"
                alt="Bologna">
            <div class="card-img-overlay">
                <a href="#" class="btn btn-light btn-sm category">${newBlogObject.category}</a>
            </div>
            <div class="card-body">
                <h4 class="card-title">${newBlogObject.title}</h4>
                <small class="text-muted cat">
                    <i class="fa fa-user text-danger"></i> ${newBlogObject.author}
                </small>
                <p class="card-text">${shortContent}</p>
                <button data-toggle="modal" data-target="#myModal" class="btn btn-dark" id="seeMore">See More</button>
                <a href="#blogPanel" class="btn btn-secondary" id="editBlog"><i class="fas fa-edit"></i></a>
                <a class="btn btn-danger" id="deleteBlog"><i class="fas fa-trash"></i></a>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div class="views">${newBlogObject.date}
                </div>
                <div class="stats">
                    <i class="far fa-eye"></i> 1342
                    <i class="far fa-comment"></i> 12
                </div>
            </div>
        </div>
    </div>`
    }

    deleteBlogFromUI(element) {
        element.remove();
    }
    updateBlogUI(dataID, updatedBlogObject) {

        var content = updatedBlogObject.content.split(' ');
        var shortContent = content.slice(0, 2).join(' ');

        if (content.length > 2) {
            shortContent += '...';
        }
        
        let blogToBeUpdate = document.querySelector(`[dataID="${dataID}"]`);
        blogToBeUpdate.innerHTML = "";
        blogToBeUpdate.innerHTML = `<div class="card blog-item">
            <img class="card-img"
                src="${updatedBlogObject.image}"
                alt="Bologna">
            <div class="card-img-overlay">
                <a href="#" class="btn btn-light btn-sm category">${updatedBlogObject.category}</a>
            </div>
            <div class="card-body">
                <h4 class="card-title">${updatedBlogObject.title}</h4>
                <small class="text-muted cat">
                    <i class="fa fa-user text-danger"></i> ${updatedBlogObject.author}
                </small>
                <p class="card-text">${shortContent}</p>
                <button data-toggle="modal" data-target="#myModal" class="btn btn-dark" id="seeMore">See More</button>
                <a href="#blogPanel" class="btn btn-secondary" id="editBlog"><i class="fas fa-edit"></i></a>
                <a class="btn btn-danger" id="deleteBlog"><i class="fas fa-trash"></i></a>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div class="views">${updatedBlogObject.date}
                </div>
                <div class="stats">
                    <i class="far fa-eye"></i> 1342
                    <i class="far fa-comment"></i> 12
                </div>
            </div>
        </div>
    </div>`
    }

    showModal(blogToShow) {
        modalContent.innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">
                <i class="fas fa-utensils"></i> ${blogToShow.title}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <img src="${blogToShow.image}" alt="Yemek Fotoğrafı" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <p>
                        <i class="fas fa-tag"></i> ${blogToShow.category}
                    </p>
                    <p>${blogToShow.content}</p>
                    <p class="text-muted small">
                        <i class="far fa-clock"></i> ${blogToShow.date}
                    </p>
                    <div class="d-flex align-items-center mt-3">
                        <span class="me-3">
                            <i class="far fa-heart"></i>
                        </span>
                        <span class="me-3">
                            <i class="far fa-comment"></i>
                        </span>
                        <span class="me-3">
                            <i class="far fa-share-square"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}