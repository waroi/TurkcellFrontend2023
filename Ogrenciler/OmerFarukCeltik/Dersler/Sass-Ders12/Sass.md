Sass bir cs ön işlemcisidir-css yazmayı dinamikleştirme amacı taşır.

Kullanımı için bir css sass dönüştürücü arayüzü, npm paketi veya macOS için brew kullanarak da yapılabilir.

# Yazım kuralları

## Değişkenler (Variables)

SASS:

$general-font: "Helvetica, sans-herif";
$my-color: #a5a5a5;

p {
 font-family: $general-font;
 color: $my-color;
}
CSS Çıktısı:

p {
 font-family: "Helvetica, sans-herif;
 color: #a5a5a5;
}
***$ işareti ile variables tanmıları yapılır***

## Nesting
iç içe yapılar kullanmamıza olanak sağlar.

SASS:

div {
 .aciklama{
   color:blue;
   &:hover{
    color:red
   }
 }
 .resim{
   width: 100%;
 }   
}
CSS Çıktısı:

div .aciklama{
  color:blue;
}
div .aciklama:hover{
  color:red;
}
div .resim{
  width: 100%;
}  
***& tagi hover,before,after gibi pseudo elementlerini kullanmamızı sağlar - içinde bulunduğu parenta etki eder***

## Import 

_variable.scss

$h1-font-size: 50px;
$h1-line-height: $font-weight-extralight;
$h1-color: #444444;
$h1-line-height: 60px;
style.scss

@import "variables";
h1{
 font-size: $h1-font-size;
 line-height: $h1-line-height;
 font-weight: $h1-font-weight;
 color: $h1-color;
}
@import yapısıyla iki farklı css tanım dosyamızı birleştirebiliyoruz.

## Katmanlar(Mixins)

***katman yapısıyla sürekli aynı parametreleri kullandığımız css içeriklerini her yerde tek bir komut çağırarak kullanmamızı sağlar.***

SASS

@mixin overlay() {
 left: 0;
 top: 0;
 background: black;
 opacity: 0.2;
}

.my-background{
 @include overlay();
}
CSS Çıktısı

.my-background{
 left: 0;
 top: 0;
 background: black;
 opacity: 0.2;
}
## Kalıtım

kalıtım ortak css kodları barındıran elementleri bir araya toplamak amacıyla kullanılır.

SASS

.mesaj{
 border: 1px solid gray;
 padding: 15px;
 color: black;
}
.basarili{
 @extend .mesaj;
 background: green;
}
.hata{
 @extend .mesaj;
 background: red;
}
.uyari{
 @extend .mesaj;
 background yellow;
}
CSS Çıktısı

.mesaj, .basarili, .hata, .uyari{ 
 border: 1px solid gray;
 padding: 15px;
 color: black;
}
.basarili{
 background: green;
}
.hata{
 background: red;
}

.uyari{
 background yellow;
}
---
@extend kalıtım alma için kullanılır 
tüm özellikleri aynı olan elementler için (ör uyarı mesajları) kalıtım alarak sadece arka plan renklerinin değişmesi sağlanmıştır.
---
## Operatörler(Operators)
matematik işlemlerini css de yapmamıza olanak tanır.
SASS

.box{ 
 width: 1/3 * 100%;
 height: 30px * 2.5;
}
CSS Çıktısı

.box{
 width: 33.333333333%
 height: 75px;
}
---
sass ve scss kullanım mantığı aynı fakat yazılış biçimleri farklı olan yapılardır.

### sass yazımı

.error:hover, .error--serious:hover {
  background-color: #fee;
}

.error--serious {
  border-width: 3px;
}
### scss yazımı
ul {
    float: left;
    margin: 0;
    padding: 0;

    li {
        list-style: none;

        a { 
            color: red;
        }
    }
}
