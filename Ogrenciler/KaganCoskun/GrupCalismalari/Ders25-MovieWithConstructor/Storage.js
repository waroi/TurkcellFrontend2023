function StorageConstructor(){}

let tempMovieData;


StorageConstructor.prototype.getLocalStorage = function () {
    return JSON.parse(localStorage.getItem("movieList"));
  }
  
  StorageConstructor.prototype.setLocalStorage = function (localData) {
    localStorage.setItem("movieList", JSON.stringify(localData));
  }
  
  StorageConstructor.prototype.deleteLocalStorage = function (name) {
    let localData = storage.getLocalStorage();
    let index = localData.indexOf(localData.find((item) => item.name === name));
    localData.splice(index, 1);
    storage.setLocalStorage(localData);
  }
  
  
  
  StorageConstructor.prototype.editLocalStorage = function () {
      isEdit=false;
    let newMovie = getData();
    let localData = storage.getLocalStorage();
    let index = localData.indexOf(
      localData.find((item) => item.name === tempMovieData.name)
    );
    localData[index] = newMovie;
    document.forms["form"]["submitBtn"].classList.replace("btn-success","btn-primary");
    document.forms["form"]["submitBtn"].innerHTML = "Create";
  
    StorageConstructor.prototype.setLocalStorage(localData);
    UI.clearForm()
    UI.loadUI();
  }
  