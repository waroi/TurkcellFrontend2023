const APIURL = "https://api.github.com/users/";
function Infos() {}
//Infos adında bir boş nesne oluşturuluyor. Bu nesne, GitHub kullanıcısıyla ilgili bilgileri ve işlemleri tutmak için.

//Await ile .then() ve .catch() içindeki geri aramaların kullanımını ortadan kaldırır.
Infos.prototype.getUser = async function (username) {
  //async ile fonksiyonun asenkron olduğunu belirtiyoruz.
  try {
    const { config, data } = await axios(APIURL + username); //await ile bekleme yapılıyor isteğin başarılı olmasını
    console.log(config, data);
    this.showUserCard(data);
    this.getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      console.log("böyle bir profil yok");
      this.errorCard("yok öyle bir şey");
    }
  }
};

Infos.prototype.errorCard = function (hata) {
  const cardHTML = `<div class=card><h1>${hata}</h1></div>`;
  document.getElementById("main").innerHTML = cardHTML;
};

Infos.prototype.getRepos = async function (username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    console.log(data);
    data.splice(5, data.length - 1);
    this.addRepos(data);
  } catch (err) {
    console.log("böyle bir repo yok");
  }
};

Infos.prototype.showUserCard = function (user) {
  console.log(user.html_url);
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}"  class="avatar ">
    </div>
    <div class="user-info">
    <a class="link-a" href="${user.html_url}"> ${user.login} ${
    user.name != null ? user.name : "Nameless User"
  }
  </a>

   <p>${user.location != null ? user.location : "No Location"}</p>
      <p> ${user.blog != null ? user.blog : "No Blog"}</p>
      <p>${
        user.twitter_username != null ? user.twitter_username : "No Twitter"
      }</p>
      <p>${user.company != null ? user.company : "No Company"}</p>
      <p>${user.email != null ? user.email : "No Email"}</p>
      <p>${user.bio != null ? user.bio : "No Bio"}</p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>

      </ul>
      <div id="repos"></div>
    </div>
  </div>
    `;

  document.getElementById("main").innerHTML = cardHTML;
};

Infos.prototype.addRepos = function (repos) {
  const reposElement = document.getElementById("repos");
  repos.forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.innerText = repo.name;
    reposElement.appendChild(repoElement);
  });
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("search").value;

  if (user) {
    const myName = new Infos();
    myName.getUser(user);

    document.getElementById("search").value = "";
  }
});
