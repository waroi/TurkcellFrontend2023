function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
    const filmList = document.getElementById("films");

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    
    `;

};
UI.prototype.clearInputs= function(title,director,url){
    title.value = "";
    director.value = "";
    url.value = "";
};

UI.prototype.loadAllFilmsFromStorage = function(films){
    const filmList = document.getElementById("films");
    
    films.forEach(function(e){
        filmList.innerHTML += `
        <tr>
            <td><img src="${e.url}" class="img-fluid img-thumbnail"></td>
            <td>${e.title}</td>
            <td>${e.director}</td>
            <td>
                <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
            </td>
        </tr>
        
        `;

    });
}

UI.prototype.deleteFilmFromUI = function(e){
    e.parentElement.parentElement.remove();
}