const header = document.getElementById("header");
const liste = document.getElementById("liste");

// console.log(header.innerText);
//
// // Dom ile elementlerin içeriğini değiştirme
// header.innerText = "Yeni Başlık";
// console.log(header.innerText);
// console.log(liste);
//
// // li ekleme yöntemleri
// liste.appendChild(document.createElement("li")).innerText = "Yeni Eklenen 1. Liste";
//
// liste.innerHTML += "<li>Yeni Eklenen 2. Liste</li>";
//
// const yeniLi = document.createElement("li");
// yeniLi.innerText = "Yeni Eklenen 3. Liste";
// liste.appendChild(yeniLi);
//
//
// let newListe = ["sueda", "abdullah", "yazilim"];
//
// console.log(newListe);
//
// newListe.push("yeni eklenen");
// console.log(newListe);
//
// //forEach ile liste ekleme
// newListe.forEach((eleman) => {
//     console.log(eleman);
//     liste.innerHTML += `<li >${eleman + " çiçekli"} </li>`;
//     const yeniLi = document.createElement("li");
//     yeniLi.innerText = eleman;
//     yeniLi.className = "yeni-liste";
//     liste.appendChild(yeniLi);
// });
//
// // map ile liste ekleme
// const yeniListe = newListe.map((eleman) => {
//     if(eleman.includes("yazilim")){
//         eleman = "YAZILIM"
//     }
// });


const films = [{
    "movies": [{
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "genre": ["Crime", "Drama"],
        "rating": 9.2
    }, {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "genre": ["Drama"],
        "rating": 9.3
    }, {
        "title": "The Dark Knight",
        "year": 2008,
        "director": "Christopher Nolan",
        "genre": ["Action", "Crime", "Drama"],
        "rating": 9.0
    }, {
        "title": "Pulp Fiction",
        "year": 1994,
        "director": "Quentin Tarantino",
        "genre": ["Crime", "Drama"],
        "rating": 8.9
    }]
}];

const cardContainer = document.getElementById("card-container");
const movies = films[0].movies;
movies.forEach((film) => {
    console.log(film);
    cardContainer.innerHTML += `
 <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${film.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${film.year}</h6>
            <p class="card-text">${film.director}</p>
            <a href="#" class="card-link">${film.rating}</a>
            <a href="#" class="card-link">${film.genre}</a>
          </div>
        </div>`
});




console.log(movies);

