//Elements
const geziCard = document.querySelector(".geziCard");
const geziForm = document.getElementById("geziForm");
const geziName = document.getElementById("geziName");
const geziContent = document.getElementById("geziContent");
const yazarName = document.getElementById("yazar");
const category = document.getElementById("category");
const geziImage = document.getElementById("geziImage");
const addGezi = document.getElementById("addGezi");
const changedGezi = document.getElementById("changedGezi");
const filterCategory = document.getElementById("filterCategory");
const filterGezi = document.getElementById("filterGezi");

//Events
eventListeners();
function eventListeners() {
geziForm.addEventListener("submit", addGeziler);
changedGezi.addEventListener("click",changedGeziler);
filterCategory.addEventListener("change", filterCategoryfunc);
filterGezi.addEventListener("keyup", filterGezifunc);
}

class Request {
  constructor(url) {
    this.url = url;
  }
  async get(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Gezi Bilgileri Alınamadı... ${res.status}`);
      }
      const responseGezi = await response.json();
      return responseGezi;
  }
  async post(gezi) {
    const response = await fetch(this.url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(gezi),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseGezi = await response.json();
    return responseGezi;
  }
  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
     const responseGezi = await response.json();
     return responseGezi;
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      const responseGezi = await response.json();
      return responseGezi; 
  }
}

const request = new Request("http://localhost:3000/geziler/");
//gezi bilgilerini alma ve uı a getirme
geziUI();
function geziUI(){
  request
    .get("http://localhost:3000/geziler")
    .then((responseJson)=>{
   responseJson.forEach(function(object){
      let metin=object.geziContent;
      metin=metin.substring(0,85);
      geziCard.innerHTML += ` 
      <div class="card m-2 col-sm-3">
        <img src="${object.geziImage}" class="geziImage card-img-top" alt="..." height="300px">
        <div class="card-body">
        <span class="geziName fs-4">${object.geziName}</span>
          <h6 class="category">${object.category}</h6>
          <p class="geziContent" >${metin}.....</p>
          <div class="yazarName text-end">${object.yazarName}</div>
          <div class="date text-end">${object.date}</div>
          <a href="#popup1" id="geziDetails" onClick="Popup(${object.id})" class="btn btn-primary mt-3  button border border-dark"  href="#">Gezi Detayları</a>
          <div class="text-right float-md-end mt-3">
            <a href="#" class="change-item" onClick="changedGezilerIcon(${object.id})">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            </a>
            <a href="#" class="delete-item" onClick="deleteGezi(${object.id})">
            <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>     
             `;
       })
    })
    .catch((err) => console.log(err));
}

//Yeni gezi ekleme 
function  addGeziler(e) {
     let tarih=new Date();
    const newGezi = {
      geziName: `${geziName.value}`,
      geziContent: `${geziContent.value}`,
      yazarName: `${yazarName.value}`,
      category: `${category.value}`,
      geziImage: `${geziImage.value}`,
      date: `${tarih.getDate()}/${tarih.getMonth()+1}/${tarih.getFullYear()}-${tarih.getHours()}:${tarih.getMinutes()}`,
    };

      request
      .post(newGezi)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    e.preventDefault();

    geziName.value="";
    geziContent.value="";
    yazarName.value="";
    category.value="";
    geziImage.value="";

}

//Seçilen geziyi sildirme
function  deleteGezi(removeId) {
       request
        .delete(removeId)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

//gezi bilgileri güncelleme
function  changedGeziler(e) {
    let tarih=new Date();
         request
          .put(removeGeziIdChanged,{
            geziName: `${geziName.value}`,
            geziContent: `${geziContent.value}`,
            yazarName: `${yazarName.value}`,
           category: `${category.value}`,
           geziImage: `${geziImage.value}`,
           date: `${tarih.getDate()}/${tarih.getMonth()+1}/${tarih.getFullYear()}-${tarih.getHours()}:${tarih.getMinutes()}`,
          })
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
          e.preventDefault();
          // textler temizleme
          geziName.value="";
          geziContent.value="";
          yazarName.value="";
          category.value="";
          geziImage.value="";
          addGezi.style = "display:inline-block";
          changedGezi.style.display="none";
}

//Gezi bilgilerini güncellemek için verileri textlere aktarma
let removeGeziIdChanged;
function  changedGezilerIcon(changedGezilerId) {
    request
      .get("http://localhost:3000/geziler")
      .then((responseJson)=>{
    responseJson.forEach(function(object){
          if(changedGezilerId==object.id)
          {
            removeGeziIdChanged=object.id;
            geziName.value=object.geziName;
            geziContent.value=object.geziContent;
            yazarName.value=object.yazarName;
            category.value=object.category;
            geziImage.value=object.geziImage;
          }
        })
      })
      .catch((err) => console.log(err));
     addGezi.style = "display:none";
     changedGezi.style.display="inline-block";
  }

//Kategoriye göre filtreleme
function filterCategoryfunc(e) {
      const filterCategory = document.querySelectorAll(".category");
      const filterValue = e.target.value.toLowerCase();
      filterCategoryUI(filterCategory, filterValue);
}

function filterCategoryUI(filterCategory, filterValue) {
    filterCategory.forEach(function (category) {
        const text = category.innerHTML.toLowerCase();
        if(filterValue=="seciniz"){
          category.parentElement.parentElement.setAttribute("style", "display:table-row");
        }
        else{
          if (text.indexOf(filterValue) === -1) {
            category.parentElement.parentElement.setAttribute("style", "display:none !important");
          } else {
            category.parentElement.parentElement.setAttribute("style", "display:table-row");
          }
        }
      });
};

//Gezi Adına göre filtreleme
function filterGezifunc(e) {
  const filterGezi = document.querySelectorAll(".geziName");
  const filterValue = e.target.value.toLowerCase();
  filterGeziUI(filterGezi, filterValue);
}
function filterGeziUI(filterGezi, filterValue) {
  filterGezi.forEach(function (category) {
      const text = category.innerHTML.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            category.parentElement.parentElement.setAttribute("style", "display:none !important");
        } else {
            category.parentElement.parentElement.setAttribute("style", "display:table-row");
        }
    });
};

//Popup UI kısmı
function Popup(geziId){
  request
      .get("http://localhost:3000/geziler")
      .then((responseJson)=>{
    responseJson.forEach(function(object){
          if(geziId==object.id)
          {
              const geziDetails=document.querySelector(".popup");
              geziDetails.innerHTML =`
              <a class="close" href="#">&times;</a>
              <h2 class="text-center">${object.geziName}</h2>
              <div class="content">
              <div class="d-flex flex-wrap">
              <div class="col-md-4 me-3">
              <img src="${object.geziImage}" class="geziImage card-img-top" alt="..." height="300px" width="250px">
              </div>
              <div class="col-md-7">
              <h6 class="category">${object.category}</h6>
              <p class="geziContent">${object.geziContent}</p>
              </div>
              </div>
              <div class="yazarName text-end">${object.yazarName}</div>
              <div class="date text-end">${object.date}</div>
              </div>
                `;
          }
        })
      })
      .catch((err) => console.log(err));
}