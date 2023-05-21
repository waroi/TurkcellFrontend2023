class MusicCard {
  static addMusicFromMusicCard(music) {
    musicList.innerHTML += `
    <div class="col-md-6 col-lg-3 my-5 px-3 blog-card" id="${music.id}">
      <div class="d-flex align-items-center justify-content-center card-img ms-0 ms-lg-3">
        <a data-bs-toggle="modal" data-bs-target="#a${music.id}">
          <picture class="position-relative d-block">
            <source
              srcset=${music.imageUrl}
              sizes="100vw"
              type="image/webp"
            />
            <img
              class="rounded-circle music-img overflow-hidden w-100 d-block img-fluid"
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271%27%20height%3D%271%27%20style%3D%27background%3Atransparent%27%2F%3E"
              srcset="
              ${music.imageUrl}488w,
              ${music.imageUrl}366w,
              ${music.imageUrl} 244w
              "
              sizes="100vw"
              alt="Exciting New Tools For Designers, May 2023."
              loading="lazy"
            />
          </picture>
        </a>
      </div>
      <div class="card-body card-shadow p-3 mt-4">
        <h3 class="card-title music-name text-light">${music.name}</h3>
        <h6 class="text-center text-success fs-5">${music.writer}</h6>
        <p class="card-text overflow-hidden text-light">${music.textContent}</p>
        <p class="card-text text-truncate text-light">${music.category}</p>
        <h5 class="text-end fs-6 text-light">${music.date}</h5>
        <h5 class="text-end fs-6 text-light">${music.clock}</h5>
        <div class="d-flex justify-content-around my-3">
          <a
            href="#"
            class="me-3 text-success"
            data-bs-toggle="modal"
            data-bs-target="#musicModal"
            ><span class="fa-solid fa-pen-to-square fa-lg"></span
          ></a>
          <a href="#" class="text-danger"><span class="fa-solid fa-trash fa-lg"></span></a>
        </div>
        <div class="d-flex justify-content-between">
           	<span class="text-light"><i class="far fa-eye "></i> 685</span>
            <span class="text-light"><i class="far fa-comment"></i> 98</span> 
          </div>
      </div>
    </div>
`;
  }
}

export default MusicCard;