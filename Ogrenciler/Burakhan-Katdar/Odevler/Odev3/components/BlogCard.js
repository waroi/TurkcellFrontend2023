const BlogCard = (blog, degis) => {
  return ` <li class="card">
    
      <div class="card-body">
        <div class="card-top">
          <div class="ct-left">
            <img id="profilePhoto" src="image/ben.jpg" alt="" />
            <h5 id="profileName" class="card-title">Burakhan Katdar</h5>
          </div>
          <div class="dropdown">
            <span>1h</span>
            <button
              class="bg-white text-black btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul id="blogEdit" class="dropdown-menu">
              <li>
                <a id="blogDuzenle" class="dropdown-item" href="#"
                  >Düzenle</a
                >
              </li>
              <li>
                <a id="blogSil" class="dropdown-item" href="#"
                  >Sil</a
                >
              </li>
            </ul>
          </div>
        </div>
        <h5 class="card-subtitle mb-2 text-dark">
          ${blog.title}
        </h5>
        <p class="card-text">
            ${blog.description}

        </p>
        <a href="#" class="text-primary">#${blog.category}
        </a>
      </div>
      
    
  </li>`;
};

export default BlogCard;
