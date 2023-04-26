{
 /* <li id="1" class="list-group-item d-flex align-items-center">
 adasd <a class="btn btn-danger ms-auto">X</a>
 <a class="btn btn-success ms-1">Yapıldı</a>
 <a class="btn btn-warning ms-1">Değiştir</a>
</li> */
}
let collector;

addTodoForm.addEventListener('submit', function (e) {
 e.preventDefault();
 collector = addTodoInput.value;
 console.log(collector);
});
