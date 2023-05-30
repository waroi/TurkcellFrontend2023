let value;

const programmer = {
  name: "İrem Gündoğan",
  age: 25,
  email: "rem1035@gmail.com",
  langs: ["Python", "Java", "JavaScript"],

  address: {
    city: "Ankara",
    street: "Bahçelievler",
  },

  work: function () {
    console.log("Programcı Çalışıyor...");
  },
};

value = programmer;
value = programmer.email;
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [
  { name: "İrem Gündoğan", age: 22 },
  { name: "Mahmut", age: 23 },
];
value=programmer[0].name

console.log(value);
