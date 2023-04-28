const form1 = document.querySelector("#addForm");

let items = document.getElementById("items");
let submit = document.getElementById("submit");
let textInputItem = document.getElementById("textInputItem");

form1.addEventListener("submit", addItem);
textInputItem.addEventListener("click", clearText);

let todoItems = [];

function addItem(e) {
  e.preventDefault();

  // Delete button elementinin oluşturulması
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger";
  deleteButton.innerText = "Delete";

  // Delete button'un click eventinde çalışacak fonskiyon
  deleteButton.addEventListener("click", deleteItem);


  // p elementinin oluşturulması
  const listP = document.createElement("p");
  listP.innerHTML = textInputItem.value;

  // li elementin oluşturulması
  const listItem = document.createElement("li");
  listItem.className = "text-black";


  // li tag'i içerisine önceden oluşturulmuş elementlerin eklenmesi
  listItem.appendChild(deleteButton);
  listItem.appendChild(listP);


  // li elementinin ul içine eklenmesi
  items.appendChild(listItem);

  // text input'tan gelen elementin todoItems içine eklenmesi
  todoItems.push(textInputItem.value);

  // - todoItems arrayinin local storage'a aktarılması
  localStorage.setItem("todoItems", JSON.stringify(todoItems));

  // Local storage bilgilerinin çekilmesi ve yazdırılması
  let usersLocal = JSON.parse(localStorage.getItem("todoItems"));
  console.log("Local Storage before deleting:\n" + usersLocal);


  function deleteItem(e) {
    e.preventDefault();

    // - todoItems içinde yer alan itemin varlığının kontrolü
    let check = todoItems.find(checkItem);

    // listP içine aktardığımız verinin todoItems içinde Find() metodu ile kontrolünün sağlanması amacıyla açılan fonksiyon
    function checkItem(item) {
      return item == listP.innerText;
    }

    // silinecek olan itemin todoItems içindeki indexi
    let deletingItem = todoItems.indexOf(check);

    // - todoItems içinde yer alan spesifik bir elemanı silmek için splice metodu kullanıyoruz. 
    // Splice metodu içindeki ilk değer silinecek olan elemanın indexini, ikinci değer ise o indexten itibaren silinecek eleman sayısını belirtir.
    // burada tek bir eleman silmek istediğimiz için önce silmek istediğimiz elemanın indexini daha sonra ikinci değeri "1" olarak atadık.
    todoItems.splice(deletingItem, 1);

    // - todoItems içerisindeki elemnanı sildikten sonra yeni halini tekrar local storage içine aktarıyoruz.
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    // yeniden aktarılan arrayin sonucunda güncellenen local storage verilerinin çekilmesi ve yazdırılması
    let usersLocal = JSON.parse(localStorage.getItem("todoItems"));
    console.log("Local Storage after deleting\n" + usersLocal);

    // tıkladığımız butonun parent elementinin silinmesi
    listItem.remove(e.target);
  }


}

function clearText(e){
    e.preventDefault();

    // textinput içine yeniden tıklandığında içinde kalan verinin temizlenmesi
    textInputItem.value = ''
  }