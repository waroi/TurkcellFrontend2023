let value;
value=document; //burası html içeriğinde yer alan bilgileri konsol üzerinde görmemizi sağlar

value=document.body;// burada document içerisinde body özelliğini çekebiliriz
value=document.head;
value=document.location;
value=document.URL;
value=document.scripts;
value=document.scripts[0];
value=document.links;
value=document.links[1];
value=document.links[1].getAttribute("class");
value=document.links[documeny.links.length-1].getAttribute("class");
value=document.links[documeny.links.length-1].className;
value=document.links[documeny.links.length-1].classList;


// ID ile element seçme

value=document.getElementById("title");
value=document.getElementById("title").textContent;
value=document.getElementById("title").innerText;
value=document.getElementById("title").innerHTML; // bunların hepsi içeriği döndürüyor ancak inner kısmında değişiklikler bulunuyor,
// innerhtml ayrıca elementi de getiriyor
// innertext kısmı da içeriğin durumuna göre getirebiliyor ve child döndürüyor
// textcontent her türlü içeriği getiriyor

// Class ile element seçme
value=document.getElementsByClassName("link"); //html collection şeklinde bütün link classlı yapıları döndürür
value=document.getElementsByClassName("link")[0];

// Tag ile seçme
value=document.getElementsByTagName("a"); // bütün a tagleri gelir

// Query selector ile seçme

value=document.querySelector("title"); // direkt yazılınca tag olarak sayıyor
// "#title" ile id oluyor
// .title ile class oluyor
value=document.querySelector(".link"); // şimdi ilk bulduğunu getirir
value=document.querySelectorAll(".link"); // buradaysa tüm link classlarını node list olarak döndürür
// foreachle dönebilme yapabiliyoruz

document.querySelectorAll("p:nth-child(even)").forEach(function (item){
    item.style.border="5px solid red";
})
document.querySelector("p").style.border="5px solid red";

// Element oluşturma

const button=document.createElement("a");
button.id="test-button-id";
button.className="btn btn-danger";
button.href="#";
button.target="_blank";

const text=document.createTextNode("test button"); // butona yazı eklemel için

button.appendChild(text);// a tag'i içerisinde yazı eklenmiş oldu

value=document.getElementById("section");
value.appendChild(button); // butonu dahil ettik



value=document.getElementById("testButton");
value.addEventListener("click",testFonk);

function testFonk(e){
    console.log("butona tıklandı");
    if(value.children[0].children[1]==e.target){
        console.log("başarılı");
    }
}

// İç içe elemanlar olacak şekilde olursa

// Event capturing ve bubbling durumları**

const textInput=document.getElementById("text-input");
textInput.addEventListener("keyup",function(){
    console.log(textInput.value);// keyup keydown ve keypress seçenekleri bulunuyor
});

textInput.addEventListener("focus",clearValue);

function clearValue(){
    textInput.value="";
}

console.log(value);