// While Döngüleri

// let i = 0;

// while (i < 10) {
//   // Sonsuz Döngü
//   console.log(i);
//   i = i + 1; //veya i+=1 veya i++ 1 ekeleme manasına geliyor
// }

// let i = 10;
// while (i > 0) {
//   console.log(i);
//   //   i--;
//   i -= 2;
// }

//Break ve contiune
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   // sonsuz döngü
//   if (i == 3 || i == 5) {
//     i++; // sonsuz döngüye girmemesi için
//     continue;
//   }
//   console.log(i);
//   i++;
// }

//Do while döngüsü

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//For döngüleri

// const langs = ["Python", "Javascript", "Java"];

// let index = 0;
// while (index < langs.length) {
//   console.log(langs[index]);
//   index++;
// }

// for (let index = 0; index < langs.length; index++) {
//   console.log(langs[index]);
// }

// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

// const users = [
//   {
//     name: "Mustafa",
//     age: 25,
//   },
//   {
//     name: "Mahmut",
//     age: 23,
//   },
//   {
//     name: "Irem",
//     age: 22,
//   },
// ];

// const names = users.map(function (user) {
//   return user.name;
// });
// const ages = users.map(function (user) {
//   return user.age;
// });
// console.log(names);
// console.log(ages);

// const user = {
//   name: "Mahmut",
//   age: 23,
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }
