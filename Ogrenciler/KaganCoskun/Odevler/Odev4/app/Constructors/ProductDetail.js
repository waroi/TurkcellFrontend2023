window.onload = function () {
    let urlString = window.location.href.toLocaleLowerCase();
    let url = new URL(urlString);
    let id = url.searchParams.get("id");
    console.log(id)
}