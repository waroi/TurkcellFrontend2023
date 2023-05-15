const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const profileDiv = document.querySelector('#profile');

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      const { name, login, avatar_url, html_url, bio, followers, following, public_repos } = data;
      profileDiv.innerHTML = `
        <div class="card">
          <img src="${avatar_url}" alt="${login}" class="avatar">
          <div class="info">
            <h2>${name}</h2>
            <p>@${login}</p>
            <p>${bio}</p>
            <ul>
              <li><strong>${followers}</strong> Followers</li>
              <li><strong>${following}</strong> Following</li>
              <li><strong>${public_repos}</strong> Public Repositories</li>
            </ul>
            <a href="${html_url}" target="_blank" class="btn">View Profile</a>
          </div>
        </div> `;
    })
});