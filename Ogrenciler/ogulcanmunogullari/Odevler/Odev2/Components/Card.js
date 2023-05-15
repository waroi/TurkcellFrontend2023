function Card({ title, author, genre, url, publishingDate, isbn }, where) {
 return `
  <div class="card" style="width:49%">
  <img src="${url}" class="card-img-top" alt="...">
  <div class="card-body d-flex flex-column justify-content-between">
    ${
     where == 'pc'
      ? `<p > ${genre[0]} reyonunda </p>`
      : `
      <div class="" style='font-size:12px'> 
      <p> ${title} </br>
      ${genre} </br>
       ${author} </br>
      ${publishingDate} </p>
      </div>
      ${
       where == 'library'
        ? `
      <div class='d-flex justify-content-center'> 
      <button class='btn btn-success flex-fill inventoryButton' style='font-size:12px'  
      id="${isbn}"> Envantere Al </button>
      </div>
      `
        : ''
      }
      ${
       where == 'inventory'
        ? `
      <div class="d-flex flew-column flex-wrap gap-1"> 
      <button class="btn btn-warning flex-fill changeButton" style='font-size:12px'  
      id="${isbn}">
      Değiştir
      </button>
      <button class="btn btn-success flex-fill bringButton" style='font-size:12px'  
      id="${isbn}">
      Geri Bırak
      </button>
      `
        : ''
      }
      </div>
      `
    }
  </div>
</div>
  `;
}

export default Card;
