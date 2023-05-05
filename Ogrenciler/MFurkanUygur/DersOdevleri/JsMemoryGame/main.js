const imgArray = [
    { name: "pizza", img: "img/pizza.png" },
    { name: "milkshake", img: "img/milkshake.png" },
    { name: "ice-cream", img: "img/ice-cream.png" },
    { name: "hotdog", img: "img/hotdog.png" },
    { name: "fries", img: "img/fries.png" },
    { name: "cheeseburger", img: "img/cheeseburger.png" },
    { name: "pizza", img: "img/pizza.png" },
    { name: "milkshake", img: "img/milkshake.png" },
    { name: "ice-cream", img: "img/ice-cream.png" },
    { name: "hotdog", img: "img/hotdog.png" },
    { name: "fries", img: "img/fries.png" },
    { name: "cheeseburger", img: "img/cheeseburger.png" }
];
//Diziyi rastgele sıralama
imgArray.sort(() => 0.5 - Math.random());

//sayfa yüklenince ekrana yazdırma
let bodyTag = document.querySelector("body");
bodyTag.setAttribute("load", loadImg());
//veya normal bi fonksiyon üzerinden çağırılabilir;
//loadImg() gibi

function loadImg() {
    let imgGrid = document.querySelector(".img-grid");
    for (let i = 0; i < imgArray.length; i++) {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", "./img/blank.png");
        imgTag.setAttribute("data-id", i)
        imgTag.setAttribute("style", "border:1px solid; margin:5px; border-radius:10px; cursor:pointer")
        imgGrid.appendChild(imgTag);
        imgTag.addEventListener("click", flipCard)
    }
}

//Cardları seçtiğimiz zaman id'lerini(twoCardCheck) ve name'lerini(cardChosen) aldık.
let cardChosen = [];
let twoCardCheck = [];


//İlk olarak her resmin data-id'sini aldık.(47)
//sonra bunu cardChosen isimli diziye attık. Bu dizide tıkladığımız card elementinin ne olduğu yani ismi saklı.(47)
//sonra id'yi de twoCardCheck isimli diziye attık(48)
//Sonra tıkladığımız resmin ne olduğunu görebilmek için cardId kullanarak resmi değiştirdik(50) 
//sonra id attığımız dizinin uzunluğunu kontrol edip eşleşme kontrolü yapacağımız fonksiyona attık(51)
function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardChosen.push(imgArray[cardId].name);
    twoCardCheck.push(cardId);
    this.setAttribute("src", imgArray[cardId].img);
    if (twoCardCheck.length === 2) {
        setTimeout(checkMatch, 400);
    }
}
let cardWon = [];
let scoreText = document.getElementById("score");
let score = 100;
scoreText.innerHTML = "Score:" + score;
//İlk olarak tüm resimlere ulaştık(62)
//sonra seçtiğimiz kartların isimleri birbirine eşitse dedik(64)
//dedik ki --> ulaştığımız tüm resimlerin tıkladığımız id'li olanını bul ve resmi değiştir dedik(65-66)
//sonra dizileri boşalt dedik (67-68)
//Eğer eşit değilse tıkladığımız id'li resmi eski haline geri dönder dedik (71-72)
//sonra yine dizileri boşalt dedk(73-74)
const allImgInHTML = document.querySelectorAll("img");
function checkMatch() {
    if (cardChosen[0] == cardChosen[1]) {
        allImgInHTML[twoCardCheck[0]].setAttribute("src", "./img/white.png");
        allImgInHTML[twoCardCheck[1]].setAttribute("src", "./img/white.png");
        allImgInHTML[twoCardCheck[0]].removeEventListener("click", flipCard);
        allImgInHTML[twoCardCheck[1]].removeEventListener("click", flipCard);
        score += 5;
        scoreText.innerHTML = "Score:" + score;
        cardChosen = [];
        twoCardCheck = [];
        cardWon.push(cardChosen);
    }
    else {
        allImgInHTML[twoCardCheck[0]].setAttribute("src", "./img/blank.png");
        allImgInHTML[twoCardCheck[1]].setAttribute("src", "./img/blank.png");
        score -= 10;
        scoreText.innerHTML = "Score:" + score;
        cardChosen = [];
        twoCardCheck = [];
    }
    if (cardWon.length === imgArray.length / 2) {
        scoreText.innerHTML = "Your Final Score is " + score;
        scoreText.style.color = "red";
    }
}

