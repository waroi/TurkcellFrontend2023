const nameIrem = "İrem Gündoğan";
const department = "Bilişim";
const salary = 4250;

// const a =
//   "İsim:" +
//   nameIrem +
//   "\n" +
//   "department:" +
//   department +
//   "\n" +
//   "maaş:" +
//   salary;

//template ile daha kolay
// const a = `isim:${nameIrem}\nDepartman:${department}\nMaaş:${salary}`;

// const html =
//   "<ul>" +
//   "<li>" +
//   nameIrem +
//   "</li>" +
//   "<li>" +
//   department +
//   "</li>" +
//   "<li>" +
//   salary +
//   "</li>" +
//   "</ul>";

function a() {
  return "Merhaba";
}

const html = `<ul>
  <li>${nameIrem}</li>
  <li>${department}</li>
  <li>${salary}</li>
  <li>${10 / 4}</li>
  <li>${a()}</li>
  </ul>`;

document.body.innerHTML = html;
