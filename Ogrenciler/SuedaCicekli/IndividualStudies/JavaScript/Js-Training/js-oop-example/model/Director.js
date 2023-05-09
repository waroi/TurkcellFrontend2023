class Director {
  id;
  name;
  surname;
  age;
  image;

  constructor(name, surname, age, image) {
    this.id = this.checkandgetID();
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.image = image;
  }

  checkandgetID() {
    let id;
    if (localStorage.getItem("director_id") === null) {
      localStorage.setItem("director_id", 0);
      id = localStorage.getItem("director_id");
    } else {
      id = parseInt(localStorage.getItem("director_id"));
      localStorage.setItem("director_id", id + 1);
    }
    return id;
  }
}