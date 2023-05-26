$(document).ready(function() {
    // JSON verilerini al
    $.getJSON("http://localhost:3000/books", function(data) {
      var books = data;

    // Ürün ekleme işlevi
    $("#addProductBtn").click(function() {
      var newProduct = {
        title: $("#title").val(),
        author: $("#author").val(),
        category: $("#category").val(),
        price: parseFloat($("#price").val()),
        image: $("#image").val()
      };
  
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/books",
        data: JSON.stringify(newProduct),
        contentType: "application/json",
        success: function(data) {
          var newBookCard = `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${data.image}" class="card-img-top" alt="${data.title}">
                <div class="card-body">
                  <h5 class="card-title">${data.title}</h5>
                  <p class="card-text">${data.author}</p>
                  <p class="card-text">${data.category}</p>
                  <p class="card-text">${data.price} TL</p>
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-primary addToCart" data-id="${data.id}">
                      <i class="fas fa-cart-plus"></i> Sepete Ekle
                    </button>
                    <div>
                      <button type="button" class="btn btn-danger deleteProduct" data-id="${data.id}">
                        <i class="fas fa-trash"></i>
                      </button>
                      <button type="button" class="btn btn-primary updateProduct" data-id="${data.id}">
                        <i class="fas fa-edit"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          $("#productList").append(newBookCard);
  
          $("#addProductModal").modal("hide");
          $("#addProductForm")[0].reset();
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  
    // Ürün silme işlevi
    $(document).on("click", ".deleteProduct", function() {
      var selectedBook = $(this).data("id");
  
      $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/books/" + selectedBook,
        success: function() {
          $(this).closest(".col-md-4").remove();
        },
        error: function(error) {
          console.log(error);
        }
      });
    });

    
    // Ürün güncelleme işlevi
    $(document).on("click", ".updateProduct", function() {
      var selectedBook = $(this).data("id");
      var $card = $(this).closest(".card");
  
      var title = $card.find(".card-title").text();
      var author = $card.find(".card-text").eq(0).text();
      var category = $card.find(".card-text").eq(1).text();
      var price = $card.find(".card-text").eq(2).text().replace(" TL", "");
      var image = $card.find("img").attr("src");
  
      // Modalı doldur
      $("#updateTitle").val(title);
      $("#updateAuthor").val(author);
      $("#updateCategory").val(category);
      $("#updatePrice").val(price);
      $("#updateImage").val(image);
  
      // Güncelleme işlemini gerçekleştir
      $("#updateProductBtn").off("click").on("click", function() {
        var updatedProduct = {
          title: $("#updateTitle").val(),
          author: $("#updateAuthor").val(),
          category: $("#updateCategory").val(),
          price: parseFloat($("#updatePrice").val()),
          image: $("#updateImage").val()
        };
  
        $.ajax({
          type: "PUT",
          url: "http://localhost:3000/books/" + selectedBook,
          data: JSON.stringify(updatedProduct),
          contentType: "application/json",
          success: function(data) {
            $card.find("img").attr("src", data.image);
            $card.find(".card-title").text(data.title);
            $card.find(".card-text").eq(0).text(data.author);
            $card.find(".card-text").eq(1).text(data.category);
            $card.find(".card-text").eq(2).text(data.price + " TL");
  
            $("#updateProductModal").modal("hide");
          },
          error: function(error) {
            console.log(error);
          }
        });
      });
  
      // Güncelleme modalını aç
      $("#updateProductModal").modal("show");
      });

      // Kitap kartlarını oluştur
      var bookCards = "";
      for (var i = 0; i < books.length; i++) {
        bookCards += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${books[i].image}" class="card-img-top" alt="${books[i].title}">
              <div class="card-body">
                <h5 class="card-title">${books[i].title}</h5>
                <p class="card-text">${books[i].author}</p>
                <p class="card-text">${books[i].category}</p>
                <p class="card-text">${books[i].price} TL</p>
                <button type="button" class="btn btn-primary addToCart" data-id="${books[i].id}">
                  <i class="fas fa-cart-plus"></i> Sepete Ekle
                </button>
                <button type="button" class="btn btn-warning addToCart" data-id="${books[i].id}">
                  <i class="fas fa-edit"></i> Güncelle
                </button>
                <button type="button" class="btn btn-danger addToCart" data-id="${books[i].id}">
                  <i class="fas fa-trash"></i> Sil
                </button>
              </div>
            </div>
          </div>
        `;
      }
  
      // Kitap kartlarını sayfaya ekle
      $("#bookContainer").html(bookCards);
  
      // Sepete ekleme butonu işlevi
      $(".addToCart").click(function() {
        var bookId = $(this).data("id");
  
        // Sepet sayısı artırma işlemi
        var cartItemCount = parseInt($("#cartItemCount").text());
        $("#cartItemCount").text(cartItemCount + 1);
  
        // Sepet modaline kitap ekleme
        var book = books.find(function(item) {
          return item.id === bookId;
        });
  
        var cartItem = `
          <tr>
            <td>${book.title}</td>
            <td>
              <input type="number" class="form-control itemQuantity" min="1" value="1">
            </td>
            <td>${book.price} TL</td>
            <td>
              <button type="button" class="btn btn-sm btn-danger removeCartItem" data-id="${book.id}">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        `;
  
        $("#cartItems").append(cartItem);
        calculateTotalPrice();
      });
  
      // Sepetten ürün çıkarma işlemi
      $(document).on("click", ".removeCartItem", function() {
        $(this).closest("tr").remove();
        calculateTotalPrice();
      });
  
      // Ürün miktarına göre toplam fiyatı hesaplama
      function calculateTotalPrice() {
        var totalPrice = 0;
  
        $("#cartItems tr").each(function() {
          var quantity = parseInt($(this).find(".itemQuantity").val());
          var price = parseFloat($(this).find("td:eq(2)").text());
          totalPrice += quantity * price;
        });
  
        $("#totalPrice").text(totalPrice.toFixed(2));
      }
  
      // Kitapları filtrelemek için fonksiyon
      function filterBooksByCategory(category) {
        var filteredBooks = books.filter(function(book) {
          return book.category.toLowerCase() === category.toLowerCase();
        });
  
        var filteredBookCards = "";
        for (var i = 0; i < filteredBooks.length; i++) {
          filteredBookCards += `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${filteredBooks[i].image}" class="card-img-top" alt="${filteredBooks[i].title}">
                <div class="card-body">
                  <h5 class="card-title">${filteredBooks[i].title}</h5>
                  <p class="card-text">${filteredBooks[i].author}</p>
                  <p class="card-text">${filteredBooks[i].category}</p>
                  <p class="card-text">${filteredBooks[i].price} TL</p>
                  <button type="button" class="btn btn-primary addToCart" data-id="${filteredBooks[i].id}">
                    <i class="fas fa-cart-plus"></i> Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          `;
        }
  
        $("#bookContainer").html(filteredBookCards);
      }
      

      // Kitapları sıralamak için fonksiyon
      function sortBooks(sortBy, sortDir) {
        var sortedBooks = books.sort(function(a, b) {
          var x = a[sortBy].toLowerCase();
          var y = b[sortBy].toLowerCase();
  
          if (sortDir === "asc") {
            if (x < y) return -1;
            if (x > y) return 1;
          } else {
            if (x > y) return -1;
            if (x < y) return 1;
          }
  
          return 0;
        });
  
        var sortedBookCards = "";
        for (var i = 0; i < sortedBooks.length; i++) {
          sortedBookCards += `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${sortedBooks[i].image}" class="card-img-top" alt="${sortedBooks[i].title}">
                <div class="card-body">
                  <h5 class="card-title">${sortedBooks[i].title}</h5>
                  <p class="card-text">${sortedBooks[i].author}</p>
                  <p class="card-text">${sortedBooks[i].category}</p>
                  <p class="card-text">${sortedBooks[i].price} TL</p>
                  <button type="button" class="btn btn-primary addToCart" data-id="${sortedBooks[i].id}">
                    <i class="fas fa-cart-plus"></i> Sepete Ekle
                  </button>
                  <button type="button" class="btn btn-warning addToCart" data-id="${sortedBooks[i].id}">
                  <i class="fas fa-edit"></i> Güncelle
                </button>
                <button type="button" class="btn btn-danger addToCart" data-id="${sortedBooks[i].id}">
                  <i class="fas fa-trash"></i> Sil
                </button>
                </div>
              </div>
            </div>
          `;
        }
  
        $("#bookContainer").html(sortedBookCards);
      }
  
      // Kitapları aramak için fonksiyon
      function searchBooks(query) {
        var searchedBooks = books.filter(function(book) {
          return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
          );
        });
  
        var searchedBookCards = "";
        for (var i = 0; i < searchedBooks.length; i++) {
          searchedBookCards += `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${searchedBooks[i].image}" class="card-img-top" alt="${searchedBooks[i].title}">
                <div class="card-body">
                  <h5 class="card-title">${searchedBooks[i].title}</h5>
                  <p class="card-text">${searchedBooks[i].author}</p>
                  <p class="card-text">${searchedBooks[i].category}</p>
                  <p class="card-text">${searchedBooks[i].price} TL</p>
                  <button type="button" class="btn btn-primary addToCart" data-id="${searchedBooks[i].id}">
                    <i class="fas fa-cart-plus"></i> Sepete Ekle
                  </button>
                  <button type="button" class="btn btn-warning addToCart" data-id="${searchedBooks[i].id}">
                  <i class="fas fa-edit"></i> Güncelle
                </button>
                <button type="button" class="btn btn-danger addToCart" data-id="${searchedBooks[i].id}">
                  <i class="fas fa-trash"></i> Sil
                </button>
                </div>
              </div>
            </div>
          `;
        }
  
        $("#bookContainer").html(searchedBookCards);
      }
  
      // Kitap kartlarını yükleme işlemini gerçekleştirir
      function loadBooks() {
        fetch(apiUrl)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            books = data;
  
            var bookCards = "";
            for (var i = 0; i < books.length; i++) {
              bookCards += `
                <div class="col-md-4 mb-4">
                  <div class="card">
                    <img src="${books[i].image}" class="card-img-top" alt="${books[i].title}">
                    <div class="card-body">
                      <h5 class="card-title">${books[i].title}</h5>
                      <p class="card-text">${books[i].author}</p>
                      <p class="card-text">${books[i].category}</p>
                      <p class="card-text">${books[i].price} TL</p>
                      <button type="button" class="btn btn-primary addToCart" data-id="${books[i].id}">
                        <i class="fas fa-cart-plus"></i> Sepete Ekle
                      </button>
                      <button type="button" class="btn btn-warning addToCart" data-id="${books[i].id}">
                        <i class="fas fa-edit"></i> Güncelle
                      </button>
                      <button type="button" class="btn btn-danger addToCart" data-id="${books[i].id}
                        <i class="fas fa-trash"></i> Sil
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }
  
            $("#bookContainer").html(bookCards);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
  
      // Sayfa yüklendiğinde kitapları gösterir
      $(document).ready(function() {
        loadBooks();
      });
  
      // Sepete ekle butonlarına tıklama işlemini gerçekleştirir
      $(document).on("click", ".addToCart", function() {
        var bookId = $(this).data("id");
        console.log("Sepete Eklendi: Kitap ID " + bookId);
        showCartItems();
      });
  
      // Kategori filtresi değiştiğinde işlemleri gerçekleştirir
      $("#categoryFilter").change(function() {
        var category = $(this).val();
        filterBooksByCategory(category);
      });
  
      // A'dan Z'ye sıralama butonlarına tıklama işlemini gerçekleştirir
      $(".sortAZ").click(function() {
        var sortBy = $(this).data("sortby");
        var sortDir = $(this).data("sortdir");
        sortBooks(sortBy, sortDir);
      });
  
      // Fiyata göre sıralama butonlarına tıklama işlemini gerçekleştirir
      $(".sortPrice").click(function() {
        var sortDir = $(this).data("sortdir");
        sortBooks("price", sortDir);
      });
  
      // Arama inputu değiştiğinde işlemleri gerçekleştirir
      $("#searchInput").on("input", function() {
        var query = $(this).val().toLowerCase();
        searchBooks(query);
      });
    });
  });