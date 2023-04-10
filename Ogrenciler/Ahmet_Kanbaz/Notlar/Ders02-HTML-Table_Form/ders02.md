<strong>Ders-02: HTML</strong>  
<strong>Konular: Tablolar, iframe, form, label, input, br, buton</strong>

#1.Tablolar (table Etiketi) 
 HTML sayfasına tablo eklemek için `<table>` etiketi kullanılır. Tabloya üst içerik eklemek için `<thead>`, tablo gövdesi için de `<tbody>` etiketi kullanılmaktadır. Tabloya satır ekleyebilmek için `<tr>`, her bir hücre için ise `<td>` etiketi kullanılmaktadır. Tabloya başlık hücresi eklemek için `<th>` etiketi kullanılır ve tablonun en alt kısına veri ekleyebilmek için ise `<tfoot>` etiketi kullanılmaktadır.  
 `<table>`: Sayfaya tablo eklemek için kullanılır.  
 `<thead>`: Tabloya üst içerik eklemek için kullanılır.  
 `<tbody>`: Tablonun gövdesini oluşturabilmek için kullanılır.  
 `<tr>`: Tablo içerisinde satır oluşturmak için kullanılır.  
 `<td>`: Tablo satırındaki her bir hücreyi belirlemek için kullanılır.  
 `<th>`: `<thead>` içerisinde başlık hücrelerini belirlemek için kullanılır.  
 `<tfood>`: Tablonun alt kısmını eklemek için kullanılır. <br>
`<table>
    <thead>
    <tr>
    <th>Ay Sırası</th>
    <th>Ay İsmi</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>1. Ay</td>
    <td>Ocak</td>
    </tr>
    <tr>
    <td>2. Ay</td>
    <td>Şubat</td>
    </tr>
    <tr>
    <td>3. Ay</td>
    <td>Mart</td>
    </tr>
    </tbody>
    </table>`  
  <h5>Çıktısı Aşağıdaki Gibidir...</h5>  
  <table>
  <thead>
    <tr>
      <th>Ay Sırası</th>
      <th>Ay İsmi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Ay</td>
      <td>Ocak</td>
    </tr>
    <tr>
      <td>2. Ay</td>
      <td>Şubat</td>
    </tr>
    <tr>
      <td>3. Ay</td>
      <td>Mart</td>
    </tr>
  </tbody>
</table>  
##2. iframe Etiketi
iframe etiketi ile oluşturmakta olduğumuz HTML sayfasının içerisine farklı bir web sayfası çağırabilir ve görüntüleyebiliriz. Bu sayede kullanıcı o linke tıklamadan aynı HTML sayfası üzerinden diğer web sayfasına da erişebilir. YouTube videolarını, Twitter akışını veya Google Maps kutucuklarını iframe kullanarak web sayfasına kolayca eklemek mümkündür.  
`<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/n00nHmtSyYQ"
title="YouTube video player"
frameborder="0"
allow="accelerometer;
  autoplay;
  clipboard-write;
  encrypted-media;
  gyroscope;
  picture-in-picture;
  web-share"
allowfullscreen></iframe>` 
<h5>Çıktı aşağıdaki gibidir...</h5>  
<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/n00nHmtSyYQ"
title="YouTube video player"
frameborder="0"
allow="accelerometer;
  autoplay;
  clipboard-write;
  encrypted-media;
  gyroscope;
  picture-in-picture;
  web-share"
allowfullscreen></iframe>  
###3.form Etiketi  <br>
Form etiketleri içinde yer alan HTML kontrolleri aracılığı ile kullanıcılardan alınan verilerin server’a gönderilmesi sağlanmaktadır. Form etiketleri içerisine gelecek olan HTML etiketleri kullanıcıdan alınan bilgilerin türüne göre değişiklik göstermektedir. Metin alanları, onay kutuları, radio butonları, gönderme butonları vb. girdi elemanları kullanılabilmektedir.<br>
####3.a. label Etiketi  
```<label>``` etiketi, form öğeleri için etiket tanımlamak için kullanılmaktadır. Veri girişi yapılan etiketler için başlık oluşturmak için kullanılabilmektedir.  
<strong>3.b. input Etiketi</strong>  
```<input>``` etiketi, en çok kullanılan form etiketi olup, type niteliğine bağlı olarak bir çok şekilde de kullanılabilmektedir.  
```<input type=”text”>```: Tek satırlık metin girişi alanı için kullanılır.  
```<input type=”radio”>```: Radio düğmesi oluşturmak için kullanılır.  
```<input type=”checkbox”>```: Onay kutusu oluşturmak için kullanılır.  
```<input type=”submit”>```: Gönder düğmesi olarak kullanılır.  
`<input type=”button”>`: Tıklanabilir bir düğme oluşturur.  

`<form><div><label>İsim:</label><input type="text" id="isim" name="isim"></div><div><label>Soy İsim:</label><input type="text" id="soyisim" name="soyisim"></div></form>`  

<h5>Çıktısı aşağıdaki gibidir...</h5>  
<form><div><label>İsim:</label><input type="text" id="isim" name="isim"></div><div><label>Soy İsim:</label><input type="text" id="soyisim" name="soyisim"></div></form>  
#####4. br Etiketi  
```<br>``` etiketi, bulunduğumuz satırdan bir aşağı satıra geçmemizi sağlayan etikettir.  
5. Buton (button Etiketi)
HTML sayfalarımızda butonlar, tıklanabilir bir düğme tanımlamaktadır. Formların gönderilmesi gibi durumlarda butonlar sıklıkla kullanılabilmektedir. Buton içerisine yazı ya da resim konulabilir. Disabled, type gibi niteliklere sahiptir.  
`<button type="button">Normal buton örneği</button>
<button type="submit">Formu gönderen buton örneği</button>
<button type="reset">Formun değerlerini sıfırlayan buton örneği</button>`  
<h5>Çıktısı aşağıdaki gibidir...</h5>
<button type="button">Normal buton örneği</button>
<button type="submit">Formu gönderen buton örneği</button>
<button type="reset">Formun değerlerini sıfırlayan buton örneği</button>