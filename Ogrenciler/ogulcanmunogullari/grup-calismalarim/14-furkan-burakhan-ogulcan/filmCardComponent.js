const filmCard = (film, degis) => {
 return `
 <li class="card" style="width: 18rem;" id="${film.id}">
     <div style="width: 100%; height: 150px;">
      <img src="${film.url}" class="card-img-top" alt="...">
     </div>
  <div class="card-body">
    <h6 class="card-title">
     <span id="">${film.yil}</span>
     <span id="">${film.puan}</span>
    </h6>
    <h4 class="card-title">${film.ad}</h4>
    <p>${film.tur}</p>
    <p class="card-text lineClamp">
    ${film.aciklama}
    </p>
    <a href="#" class="btn btn-warning filmDegistir${film.id} ${
  degis ? 'd-none' : null
 }" >Değiştir</a>
    <a href="#" class="btn btn-danger" >Silme</a>
    </li>
 `;
};

export default filmCard;
