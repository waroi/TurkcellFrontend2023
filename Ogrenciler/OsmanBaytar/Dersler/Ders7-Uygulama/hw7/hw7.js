function displayHome() {
    var x = document.getElementById("nav-subpart-home");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function displayPages() {
    var x = document.getElementById("nav-subpart-pages-inside");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}