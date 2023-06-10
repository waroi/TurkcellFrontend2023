import Fetch from "./classes/fetch.js"
import newCard from "./components/card.js"
import Blog from "./classes/blog.js"
import newOption from "./components/option.js"
const cardRow = document.getElementById("cardRow")
const blogDetail = document.getElementById("blogDetail")
const blogName = document.getElementById("blogName")
const catCategory = document.getElementById("catCategory")
const blogDate = document.getElementById("blogDate")
const blogClock = document.getElementById("blogClock")
const blogAuthor = document.getElementById("blogAuthor")
const blogTextContent = document.getElementById("blogTextContent")
const imgUrl = document.getElementById("imgUrl")
const form = document.querySelector("form")
const addButton = document.getElementById("addButton")
const editButton = document.getElementById("editButton")
const sort = document.getElementById("sort")
const search = document.getElementById("search")
const category = document.getElementById("category")
updateCards()
uniques()
// cardrow içini boşaltık gelen dizinin tüm elemanlarıyla yeni bir kart oluşturduk  yeni diziyi dönerek
function showBlog(blogs) {
  cardRow.innerHTML = ""
  cardRow.innerHTML += blogs.map(blog => newCard(blog)).join("")
}
// veritabanındaki verilere istek atarak alıp gelen diziyi show bloga gönderdik
function updateCards() {
  Fetch.get("http://localhost:3000/blogs").then(data => showBlog(data))
}
// veritabanına gönderme isteği atarak dışardan aldığımız newdatayı veritabanına ekledik daha sonra .then kullanarak istek tamamlanınca formu resetledik
function addBlog(newData) {
  Fetch.post("http://localhost:3000/blogs", newData).then(form.reset())

}

let current;

function editBlog(id) {
  Fetch.get(`http://localhost:3000/blogs/${id}`).then(data => {
    blogAuthor.value = data.author
    blogName.value = data.title
    blogTextContent.value = data.text
    catCategory.value = data.category
    blogDate.value = data.releaseDate
    blogClock.value = data.releaseTime
    blogDetail.value = data.detail
    imgUrl.value = data.img
    current = data
    editButton.addEventListener("click", (e) => {
      e.preventDefault()
      const newData = {
        author: blogAuthor.value,
        title: blogName.value,
        text: blogTextContent.value,
        category: catCategory.value,
        releaseDate: blogDate.value,
        releaseTime: blogClock.value,
        detail: blogDetail.value,
        img: imgUrl.value,
        id: current.id


      }
      Fetch.put("http://localhost:3000/blogs", newData, current.id)
        .then(form.reset())
        .then(updateCards())
    })
  })
}

function sortBlog(sortType) {
  Fetch.get("http://localhost:3000/blogs").then(blogs => {
    switch (sortType) {
      case "asc-title":
        showBlog([...blogs].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
        break;
      case "desc-title":
        showBlog([...blogs].sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase())))
        break;
      case "asc-author":
        showBlog([...blogs].sort((a, b) => a.author.toLowerCase().localeCompare(b.author.toLowerCase())))
        break;
      case "desc-title":
        showBlog([...blogs].sort((a, b) => b.author.toLowerCase().localeCompare(a.author.toLowerCase())))
        break;
      case "asc-date":
        showBlog([...blogs].sort((a, b) => a.releaseDate.localeCompare(b.releaseDate)))
        break; w
      case "desc-date":
        showBlog([...blogs].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate)))
        break;

      default:
        showBlog([...blogs])
        break;
    }
  })
  if (category.value != "") filterBlogs(category.value)

}

function searchBlog(searchValue) {
  Fetch.get("http://localhost:3000/blogs").then(blogs => {
    showBlog(blogs.filter((blog) =>
      blog.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      blog.title.toLowerCase().includes(searchValue.toLowerCase())))
  })
  if (category.value != "") filterBlogs(category.value)
}
function uniques() {
  Fetch.get("http://localhost:3000/blogs").then(blogs => {
    const categories = new Set(blogs.map((blog) => blog.category.toLowerCase()))
    category.innerHTML = ""
    category.innerHTML += ` <option value="">Hepsi</option>`
    category.innerHTML += Array.from(categories).map(item => newOption(item)).join("")
  })
}
function filterBlogs(selectedCategory) {
  Fetch.get("http://localhost:3000/blogs").then(blogs => {
    blogs.map(blog => {
      const current = document.querySelector(`#${blog.id}`)
      if (current) {
        if (blog.category.toLowerCase() != selectedCategory.toLowerCase()) {
          current.classList.add("d-none")

        } else { current.classList.remove("d-none") }
      }

    })

  })

}




// veritananına silme isteği atarak dışardan aldığımız ıdye sahip veriyi sildik daha sonra .then kullanarak istek tamamlanınca kartları güncelemeye çalıştık.
function deleteBlog(id) {
  Fetch.delete("http://localhost:3000/blogs", id).then(setTimeout(() => { updateCards() }, 500))

}
// addeventlistenerla form submit olduğunda içindeki verileri aldık ve blog objesi oluşturduk daha sonra bu blog objesini addblog fonk. gönderdik. daha sonra update ile kartları güncelledik
addButton.addEventListener("click", (e) => {
  e.preventDefault()
  const newData = new Blog(
    blogAuthor.value,
    blogName.value,
    blogTextContent.value,
    catCategory.value,
    imgUrl.value,
    blogDate.value,
    blogClock.value,
    blogDetail.value

  )
  addBlog(newData)
  updateCards()


})
// bütün kartların oldgu cardrowda tıklama eventini dinledik eğer tıklanan şey silme butonuysa onu kapsayan kartın idsini alıp delete bloga gönderdik.
cardRow.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    const selected = e.target.closest(".col-md-3")
    console.log(selected)
    deleteBlog(selected.id)
    selected.remove()
    // updateCards()
  }
  else if (e.target.classList.contains("edit-btn")) {
    const selected = e.target.closest(".col-md-3")
    editBlog(selected.id)

  }
})
sort.addEventListener("change", (e) => {
  sortBlog(e.target.value)
  search.value = ""
})

search.addEventListener("keyup", (e) => {

  searchBlog(e.target.value)
  sort.value = "default"
})
category.addEventListener("change", (e) => {
  // search kısmını sor
  if (e.target.value == "")
    searchBlog(search.value)
  else filterBlogs(e.target.value)
  if (sort.value != "")
    sortBlog(sort.value)

})
