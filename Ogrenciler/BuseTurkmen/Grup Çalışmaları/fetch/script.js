function getAPI(){
   fetch("https://jsonplaceholder.typicode.com/user")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((user) => {
        console.log(user.name);
      })
    )
    .catch((err) => console.log(err));
}
getAPI();