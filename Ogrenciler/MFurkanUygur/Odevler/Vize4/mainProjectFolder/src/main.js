const http = new Http()
const ui = new UI()
// const toastTrigger = document.getElementById('addButton');
// const liveToastforAddBtn = document.getElementById('liveToastforAddBtn')
// const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToastforAddBtn)

document.addEventListener("DOMContentLoaded", getPosts)
function getPosts() {
    ui.getPost()
}

document.getElementById("addButton").addEventListener("click", addTour)
function addTour() {
    //tour name bilgisi
    const tourName = document.getElementById("tourName").value;
    //tour day bilgisi
    const tourDaySelect = document.getElementById('tourDay');
    const tourDay = tourDaySelect.options[tourDaySelect.selectedIndex].value;
    //tour food bilgisi
    const tourFoodSelect = document.getElementById('tourFood');
    const tourFood = tourFoodSelect.options[tourFoodSelect.selectedIndex].value;
    //tour transport bilgisi
    const tourTransportSelect = document.getElementById("tourTransport");
    const tourTransport = tourTransportSelect.options[tourTransportSelect.selectedIndex].value;
    //tour picture bilgileri
    const tourPicture1 = document.getElementById("tourPicture1").value;
    const tourPicture2 = document.getElementById("tourPicture2").value;
    const tourPicture3 = document.getElementById("tourPicture3").value;
    //tour category bilgileri
    const tourCategorySelect = document.getElementById("tourCategory");
    const tourCategory = tourCategorySelect.options[tourCategorySelect.selectedIndex].value;
    //tour price bilgisi
    const tourPrice = document.getElementById("tourPrice").value;
    //tour stock bilgisi
    const tourStock = document.getElementById("tourStock").value
    //tour description bilgileri
    const tourDescription = document.getElementById("tourDescription").value;
    const data = {
        tourName, tourDay, tourFood, tourTransport, tourPicture1, tourPicture2, tourPicture3, tourCategory, tourPrice, tourStock, tourDescription
    }

    if (tourName == "" ||
        tourDay == "" ||
        tourFood == "" ||
        tourTransport == "" ||
        tourPicture1 == "" ||
        tourPicture2 == "" ||
        tourPicture3 == "" ||
        tourCategory == "" ||
        tourPrice == "" ||
        tourStock == "" ||
        tourDescription == ""
    ) {
        console.log("tüm alanları doldurunuz")
        // toastTrigger.addEventListener('click', () => {
        //     toastBootstrap.show()
        // })
    }
    else {
        // allTours.innerHTML = ""
        console.log("başarılı")
        http
            .post('http://localhost:3000/tours', data)
            .then(data => {
                getPosts()
                ui.displayAllPosts(data)
            })
            .catch((err) => console.log(err));
        ui.clearForm()
    }
}

const blogCategoriesBtn = document.querySelector("#tourCategories");
blogCategoriesBtn.addEventListener("change", (e) => {
    ui.displayBlogFromCategory(e.target.value)
})

sortTitles = document.querySelector("#sortOptions");
sortTitles.addEventListener("change", (e) => {
    console.log(e.target.value)
    ui.globalSortBlogs(e.target.value)
})

const uniqueBasket = document.getElementById("uniqueBasket");
uniqueBasket.addEventListener("click", () => {
    ourBasketItems.innerHTML = ""
    ui.basketMain()
    ui.getPost()
})

const buyAllItems = document.querySelector(".buy-all-items")
buyAllItems.addEventListener("click", () => {
    basketLength.value = ""
    ui.buyItemsAndClear()
    ui.emptyBasket()
    ui.getPost()

})