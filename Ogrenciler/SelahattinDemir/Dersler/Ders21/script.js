// Functions
merhaba();
function merhaba() {
  console.log("Merhaba");
}

function user(name, age) {
  console.log(`İsim: ${name} Yaş: ${age}`);
}

user("Varol", 37);
user("Maksutoğlu", 38);

function user1(name = "Bilgi Yok", age = "Bilgi Yok") {
  console.log(`İsim: ${name} Yaş: ${age}`);
}

user1("Varol");
user1();

// Return ile dışarı değer döndürme
function square(x) {
  return x * x;
}
const sonuc = square(5) * 3;
console.log("square", sonuc);

function cube(x) {
  return x * x * x;
}
const sonuc1 = cube(5) + 10;
console.log("cube", sonuc1);

// /**
//  * Rastgele Başlık xD
//  * @param {string} x
//  */
function test(x) {}
test();

const database = {
  host: "localhost",
  add: function () {
    console.log("Veri Eklendi");
  },
  get: function () {
    console.log("Veli Okundu");
  },
  update: function (id) {
    console.log(`${id} id'li Veri güncellendi`);
  },
  delete: function () {
    console.log(`Veri silindi`);
  },
};

console.log("database.host", database.host);
database.add();
database.get();
database.delete();
database.update(10);

// Arrow functions

// const kare = function (x) {
//   return x * x;
// }

const kare = (x) => {
  return x * x;
};

console.log(kare(5));

const kare1 = (x) => x * x;
console.log(kare1(5));

// Loops - Döngüler
// while döngüsü

let i = 0;
while (i < 10) {
  console.log("Merhaba");
  i++;
}

let item = 0;
while (item < 10) {
  if (item === 3 || item === 5) {
    item++;
    continue;
  }
  console.log(`Deneme ${item}`);
  item++;
}

// do while döngüsü

let a = 0;
do {
  console.log(`Deneme ${a}`);
  a++;
} while (a > 10);

// Array map() methodu

const langs = ["Python", "Java", "C++", "C#"];

langs.map(function (x) {
  console.log(x);
});

langs.map((x) => console.log(x));
const lengths = langs.map((x) => x.length);
console.log(lengths);

langs.map((x, i) => console.log(i, x));
