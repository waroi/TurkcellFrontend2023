class Fetch {
 constructor(url = 'https://api.github.com/users/') {
  this.url = url;
 }
 async getUser(username) {
  const USER_RESPONSE = await fetch(`${this.url}${username}`, {
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'GET',
  });
  if (USER_RESPONSE.status === 404) {
   return '404';
  } else {
   const USER_DATA = await USER_RESPONSE.json();
   const REPOS_RESPONSE = await fetch(
    `${this.url}${username}/repos?sort=created&per_page=5`,
   );
   const REPOS_DATA = await REPOS_RESPONSE.json();
   
   const JUST_REPO_NAMES = REPOS_DATA.map((repo) => {
    return { repoName: repo.name, repoUrl: repo.html_url, stars: repo.stargazers_count, forks: repo.forks_count, watchers: repo.watchers_count };
   });
   return {
    repo: JUST_REPO_NAMES,
    user: USER_DATA,
   };
  }
 }
 getLatestSearch() {
  const SEARCHES = JSON.parse(localStorage.getItem('search'));
  if (SEARCHES) {
   return SEARCHES;
  }
  return [];
 }
 setLatestSearch(username) {
  const SEARCHES = this.getLatestSearch();
  if (SEARCHES.length == 2) {
   SEARCHES.pop();
  }
  const isTrue =  SEARCHES.find((search) => search === username)
  if(!isTrue){
   SEARCHES.unshift(username);
   localStorage.setItem('search', JSON.stringify(SEARCHES));
  }
 }
 deleteAllLatestSearch() {
  localStorage.removeItem('search');
  return [];
 }
}
export default Fetch;
