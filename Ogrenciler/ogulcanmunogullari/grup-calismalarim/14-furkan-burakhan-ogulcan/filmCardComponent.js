import turler from './turComponent.js';
const filmCard = (film, degis) => {
 return `
 <li class="card" id="${film.id}">
     <div style="width: 100%;">
      <img src="${film.url}" class="card-img-top " alt="film url si">
     </div>
  <div class="card-body text-white">
    <h6 class="card-title d-flex justify-content-between">
     <span>${film.yil}</span>
     <span>
     ${
      film.ad.toLowerCase().includes('yüzüklerin efendisi') ||
      film.ad.toLowerCase().includes('yuzuklerin efendisi')
       ? '10'
       : film.puan
     }
     </span>
    </h6>
    <h4 class="card-title">${film.ad}</h4>
    <div class="turler-container lineClamp"> 
    ${turler(film.tur)}
    </div>
      <p class="card-text lineClamp">
      ${film.aciklama}
      </p>
    <a href="#" class="btn btn-warning filmDegistir${film.id} ${
  degis ? 'd-none' : null
 }" >Değiştir</a>
 <a href="#" class="btn btn-danger" >Silme</a>
    </div>
    </li>
 `;
};

export default filmCard;
