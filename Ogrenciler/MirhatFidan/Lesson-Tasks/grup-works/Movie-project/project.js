const titleElement=document.getElementById("title")
const directorElement=document.querySelector("#director")
const urlElement=document.getElementById("url")
const form=document.getElementById("film-form")
const tBody=document.getElementById("films")
const clearAllFilms=document.getElementById("clear-films")



eventListeners()

function eventListeners(){


    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmsFromStorage()
        UI.loadAllFilms(films)

    })
    clearAllFilms.addEventListener("click",deleteAll)
    tBody.addEventListener("click",deleteFilm)
    
}




function addFilm(e){
    
    
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    
    if(title===""||director==""||url===""){
        UI.displayMessages("Lütfen boş alan bırakmayınız","danger")

    }
    else{
        const newFilm=new Film(title,director,url)
        UI.addFilmToUI(newFilm)
        UI.displayMessages("Başarılı bir şekilde oluşturdunuz","success")
        Storage.addFilmToStorage(newFilm)
       
        
        
    }

    UI.clearInput(titleElement,directorElement,urlElement)

    e.preventDefault()
}
function deleteFilm(e) {
    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.textContent)
    }

}

function deleteAll(){
    if(confirm("Emin misiniz?")){
        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()
    }
}
