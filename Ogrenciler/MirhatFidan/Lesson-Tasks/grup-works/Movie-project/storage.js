class Storage {
    static addFilmToStorage(newFilm){
        let film=this.getFilmsFromStorage()
        film.push(newFilm)
        localStorage.setItem("films",JSON.stringify(film))
    }

   static getFilmsFromStorage(){
       let films;
       if (localStorage.getItem("films")===null){
           films=[]
       }
       else{
           films=JSON.parse(localStorage.getItem("films"))
       }
       return films
   }

   static deleteFilmFromStorage(filmDirector){
       let films=this.getFilmsFromStorage()
       films.forEach(function (film ,index) {
           if(filmDirector===film.director){
               films.splice(index,1)
           }})

        
       localStorage.setItem("films",JSON.stringify(films))
   }

   static clearAllFilmsFromStorage(){
       localStorage.removeItem("films")
   }
   
}