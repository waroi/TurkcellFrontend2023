function getApi() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            let allUsers = data.map(user => user)
            render(allUsers)
            // console.log(allUsers)
            // allUsers.forEach(e => {
            //     document.getElementById("usersName").innerHTML += `<li>${e.id} -- ${e.name}  </li>`
            // });
        })
        .catch((err) => console.log(err))
}

getApi()


function render(allUsers) {
    console.log(allUsers)
    allUsers.forEach(e => {
        document.getElementById("usersName").innerHTML += `<li>${e.id} -- ${e.name}  </li>`
    });
}