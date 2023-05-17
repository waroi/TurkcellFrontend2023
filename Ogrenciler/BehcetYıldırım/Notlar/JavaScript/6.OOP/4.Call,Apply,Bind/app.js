// Call ve Apply Fonskiyonu
// Bu Fonksiyonlar bir fonksiyonu farkı objeler ile kullanmayı sağlar.

const obj1 = {
    number1 : 10,
    number2 : 20
};
const obj2 = {
    number1 : 30,
    number2 : 40
}

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 +number3 + number4)
}

//addNumbers(100,200);// Burada sonuç NaN çıkar. Çünkü fonksiyon içindeki this window objesini göstermektedir ve undifined'tır.

addNumbers.call(obj1,100,200);
addNumbers.call(obj2,100,200);
// Burada fonksiyonlar objelere göre çalışıyor.

addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);


// Bind Fonksiyonu
// Bu fonksiyon kullandığımız bir fonksiyonun kopyasını yaratır.

const copyFunc=addNumbers.bind(obj1);

copyFunc(100,200);
