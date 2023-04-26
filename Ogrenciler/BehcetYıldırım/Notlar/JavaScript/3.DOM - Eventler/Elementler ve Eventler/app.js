
const filterinput= document.getElementById("filter");
// Id'si filter olan elementimizin üzerine tıkladığımızda(focus durumunda) oluşan evenleri görmek 
// veya bu eventlere bir şeyler eklemek


filterinput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);

    console.log("Naber");
});
// bir farklı yöntemi aşağıdaki şekildedir.
// filterinput.onfocus = function(){
//     console.log("naber");
// }

const todoform= document.getElementById("todo-form");
// Id'si todo-form olan elementimizin üzerine tıkladığımızda(submit durumunda) oluşan evenleri görmek 
// veya bu eventlere bir şeyler eklemek
todoform.addEventListener("submit", function(e){
    console.log("Submit eventi");




    e.preventDefault(); // bunun sayesinde submit eventi çalıştığında default olan 
    // sayfa yenileme özelliği devre dışı kalır. Ve submit eventi yazısını görebiliriz.
    // bu özelliği en altta kullanmamız daha iyidir.
});