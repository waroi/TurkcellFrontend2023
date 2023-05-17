import turler from './turComponent.js';
const kitapCard = (kitap, degis) => {
 return `
 <li class="card" id="${kitap.id}">
     <div style="width: 100%;">
      <img src="${kitap.url}" class="card-img-top " alt="kitap url si">
     </div>
  <div class="card-body text-white">
    <h6 class="card-title d-flex justify-content-between">
    <span>
     ${kitap.puan}
     </span>
     <span>${kitap.yil}</span>
     
    </h6>
    <h4 class="card-title">${kitap.ad}</h4>
    <div class="turler-container lineClamp"> 
    ${turler(kitap.tur)}
    </div>
      <p class="card-text lineClamp">
      ${kitap.aciklama}
      </p>
    <a href="#" class="btn btn-warning kitapDegistir${kitap.id} ${
  degis ? 'd-none' : null
 }" >Değiştir</a>
 <a href="#" class="btn btn-danger" >Silme</a>
    </div>
    </li>
 `;
};

export default kitapCard;
