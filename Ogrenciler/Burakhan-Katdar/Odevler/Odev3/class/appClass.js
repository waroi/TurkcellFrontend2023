import Blog from "./BlogClass.js";
import Request from "./RequestClass.js";
import UI from "./UIClass.js";

let ui = new UI(false, null, null);

fetch("http://localhost:3000/blog")
  .then((response) => response.json())
  .then((data) => {
    // JSON verisini kullanmak için buraya yerleştirilecek kodlar

    console.log(data);
    ui.screen(data);
  })
  .catch((error) =>
    console.error("JSON verisi alınırken bir hata oluştu:", error)
  );

blogSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const blog = new Blog(
    2,
    blogTitle.value,
    "Tuğkan Gönültaş",
    blogDescription.value,
    blogCategory.value,
    blogImage.value
  );

  const request = new Request("http://localhost:3000/blog");

  request
    .post({
      userId: 2,
      author: "Tuğkan Gönültaş",
      title: blog.title,
      description: blog.description,
      category: blog.category,
      // "image": blog.image,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  fetch("http://localhost:3000/blog")
    .then((response) => response.json())
    .then((data) => {
      // JSON verisini kullanmak için buraya yerleştirilecek kodlar
      const blogArray = data.blog;
      ui.screen(blogArray);
    })
    .catch((error) =>
      console.error("JSON verisi alınırken bir hata oluştu:", error)
    );

    blogEdit.addEventListener("click", function(e) {
      e.preventDefault();
      if (e.target.id == "blogSil"){
        fetch("http://localhost:3000/blog")
        .then((response) => response.json())
        .then((data) => {
          // JSON verisini kullanmak için buraya yerleştirilecek kodlar
          console.log("data id"+data.id)
          request.delete(data.id)
          
          ui.screen(data);
        })
        .catch((error) =>
          console.error("JSON verisi alınırken bir hata oluştu:", error)
        );
      }
    
    })
});

search.addEventListener("input", function (e) {
  e.preventDefault();
  fetch("http://localhost:3000/blog")
    .then((response) => response.json())
    .then((data) => {
      // JSON verisini kullanmak için buraya yerleştirilecek kodlar

      console.log(data);
      ui.screen(data);
    })
    .catch((error) =>
      console.error("JSON verisi alınırken bir hata oluştu:", error)
    );
});

mfFilter.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.id != "mfFilter") {
    ui.filterTur = e.target.innerText;
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar

        console.log(data);
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
  }
});

msTitle.addEventListener("click", function (e) {
  e.preventDefault();
  

  if (e.target.id == "msTitleAsc") {
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return a.title.localeCompare(b.title); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
  if (e.target.id == "msTitleDesc") {
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return b.title.localeCompare(a.title); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
});

msAuthor.addEventListener("click", function (e) {
  e.preventDefault();
  

  if (e.target.id == "msAuthorAsc") {
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return a.author.localeCompare(b.author); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
  if (e.target.id == "msAuthorDesc") {
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((data) => {
        // JSON verisini kullanmak için buraya yerleştirilecek kodlar
        
        data.sort((a, b) => {
          return b.author.localeCompare(a.author); // Sıralama için "localeCompare" kullanılır
        });
        ui.screen(data);
      })
      .catch((error) =>
        console.error("JSON verisi alınırken bir hata oluştu:", error)
      );
    // var sortedBooks = kitaplar
    //   .filter((kitap) => {
    //     return kitap.ad;
    //   })
    //   .sort((a, b) => {
    //     return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
    //   });
  }
});


