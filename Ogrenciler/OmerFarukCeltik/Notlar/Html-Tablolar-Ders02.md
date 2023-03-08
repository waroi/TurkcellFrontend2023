<!-- tablolar -->
 <thead>
         <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yaş</th>
        </tr>
 </thead>

 başlık satırındaki her bir sütunun temsil edildiği alan thead tag i içerisinde kullanılıyor.
<tr> tr sütun elemanlarını temsil ediyor.
<th> tag i table head oalrak kullanılıyor. 

<tbody>
        <tr>
             <td>ahmet</td>
            <td>demir</td>
            <td>lise</td>
        </tr>
        <tr>
             <td>mehmet</td>
             <td>çelik</td>
             <td>lise</td>
        </tr>
            <tr>
            <td>ali</td>
            <td>demir</td>
            <td>lise</td>
        </tr>
 </tbody>
 
 <tbody> tag i table body e yani tablo içeriklerine karşılık geliyor.
 <td> ise tablo elemanlarını "table description" temsil ediyor.

  <tfoot>
        <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
        </tr>
 </tfoot>

<tfoot> tag i ise tabloların footerını temsil eder.

<!-- iframe, video & audio -->

<iframe> "deprecated" bir tagdir. Mantığı sayfanın içerisinde başka bir kaynağı ayrı bir sayfa olarak çalıştırır. Bu bir web adresi veya video olabilir.

<video> tag i ile de kaynak belirterek lokalimizden veya web üzerinden video paylaşımı yapabiliriz. 
<video controls> ile kontrol butonlarını verebiliriz.
<video loop> ile sürekli durmadan çalışmasını sağlayabiliriz.
<video muted> ile sessiz gelmesini sağlayabiliriz.

<audio> ile ses dosyalarını veya mp4 formatlı dosyaları verip sadece sesini çalıştırabiliriz.
loop controls muted ve autoplay taglerini de yine kullanabiliriz.

<!-- Form, input & label -->
<form>
    <div>
        <label for="name">isim:</label>
        <input type="text" id="name">
    </div>
    <div>
        <label for="surname">soyisim:</label>
        <input type="text" id="surname">
    </div>
    <div>
        <label for="email">email:</label>
        <input type="text" id="email">
    </div>
</form>

<form> tagi ile inputlara girdiğimiz verilerin gönderimi ve iletimini sağlayabiliriz.
<label> ile inptumuzun isimlendirmesini yapabiliriz ve for ile input id yi eşleştirebiliriz.
<input> ve input type ile kullanıcıdan almak istediğimiz verileri veri tipne göre alabiliriz.

<!-- Radio & Checkbox -->

<div>
    <label>Cinsiyet</label>
    <label for="man">Erkek</label>
    <input type="radio" name="sex" id="man">
    <label for="woman">Erkek</label>
    <input type="radio" name="sex" id="woman">
</div>

<div>
    <label>Programlama Dilleri</label>
    <label for="python">Python</label>
    <input type="checkbox" name="lagns" id="python">
    <label for="Javascript">JavaScript</label>
    <input type="checkbox" name="langs" id="Javascript">
</div>

<input> radio ve checkbox larda idleri labellar ile ilişkilendirip radio da tekli seçim opsiyonlarını checkboxta ise çoklu seçimleri yaptırıyoruz.