export function fetchItems(username){
   new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())

  });
}