let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let value;
for (;;) {
    value = prompt("Sayı giriniz:");
    if (value == randomNumber) {
        console.log("Sayıyı buldunuz. ");
        console.log("Deneme sayısı:" + (i + 1));
        break;
    }
    else if (value > randomNumber) {
        console.log("küçük bir değer giriniz...");
    }
    else {
        console.log("büyük bir değer gir.")
    }
}