let value;

const isim="sait behcet"
const soyisim="yıldırım"
const langs="java, python, c"

value=isim+" " +soyisim;

value="sait behcet ";
value += "yıldırım";

value= isim.length;

value=isim.concat(" ",soyisim," deneme" );// stringe yanyana eklemek için


value = isim.toUpperCase();// harfleri büyük yazar.


value= isim[0];
value= isim[2];

// index of
value= soyisim.indexOf("l");// içerisinde yazdığımız stringin hangi indexte olduğunu bulur.


// char at
value= isim.charAt(5);// içerisine girdiğimiz index'te hangi karakter var.
value= isim.charAt(isim.length-1);

//split

value=langs.split(",")// virgüle göre parçalar.

//replace

value=langs.replace("python","CSS")// python yerine css yazar.


// includes

value=langs.includes("java")// stirng içerisinde java bulabilirse true döner.

console.log(value);
