## Ders01
```<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Html Giriş</title>
  </head>
  <body>
    
  </body>
</html>
```
**html base iskeleti ve genel html taglerinden bahsedilmiştir**
    
    <h1>Merhaba</h1>
    <h2>Merhaba</h2>
    <h3>Merhaba</h3>
    <h4>Merhaba</h4>
    <h5>Merhaba</h5>
    <h6>Merhaba</h6>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
      assumenda facere officiis. Corrupti omnis ea deleniti cumque, distinctio
    </p>
    <span>Deneme</span>
    <span>Deneme</span>
    <span>Deneme</span>
    <span>Deneme</span>
    <span>Deneme</span>
    <div>Html Giriş</div>
    <a href="https://www.hepsiburada.com/" target="_blank">Bu bir link</a>
    <a href="../test.html" target="_blank">Test Sayfası</a>
    <ol>
      <li>Html</li>
      <li>Css</li>
      <li>JavaScript</li>
    </ol>
    <ul>
      <li>Html</li>
      <li>Css</li>
      <li>JavaScript</li>
    </ul>
    <img
      src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
      alt="logo"
      width="200px"
    />
    <img src="logo.png" alt="logo2" width="200px" />


1. h1, h2, p tagleri gibi metinsel taglerden
2. ul, ol ve li sıralı listeleme taglerinden
3. a tagi ve href=" " ile link taglerinden 
4. img tagi ile html sayfasına resim ve url eklemekten 

bahsedilmiştir.

## Ders02

2'nci derste 
1. table formunun yapısal mantığından;
2. iframe ile html sayfasına bir döküman, video ve interaktif medya bağlantılarının eklenmesinden;
3. input yapısıi input type özellikleri ve label kullanımından

bahsedilmiştir.
### table
```
<table>
      <thead>
        <tr>
          <th>Ad</th>
          <th>Soyad</th>
          <th>Yaş</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ali</td>
          <td>Yılmaz</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Can</td>
          <td>Yılmaz</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Canan</td>
          <td>Yılmaz</td>
          <td>25</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Test</td>
          <td>Test</td>
          <td>Total</td>
        </tr>
      </tfoot>
    </table>
```

yapısı ile 

<table>
      <thead>
        <tr>
          <th>Ad</th>
          <th>Soyad</th>
          <th>Yaş</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ali</td>
          <td>Yılmaz</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Can</td>
          <td>Yılmaz</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Canan</td>
          <td>Yılmaz</td>
          <td>25</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Test</td>
          <td>Test</td>
          <td>Total</td>
        </tr>
      </tfoot>
    </table>

çıktısı alınır.burada;

1. **thead** tagi içerisindeki kısım tableda bulununan başlıkları ve **th** içerisinde başlık içeriklerini
2. **tbody** tagi içerisinde table body elementlerini **td** içerisinde de satırların içerisindeki elemetleri
3. **tr** tagleri ile satırları 
4. **tfoot** tagi ile sonucu göstereceğimiz footer alanını

belirleriz.
### iframe
```
  <iframe
      width="800"
      height="600"
      src="https://www.youtube.com/embed/JYs_94znYy0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
```
**iframe** tagi ile video, audio veya multimedya içerikleri veya haritalar, farklı websiteleri gibi öğeleri html dökümanımıza implemente edebiliriz.
  
  <iframe
      src="https://www.youtube.com/embed/JYs_94znYy0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
</iframe>

### form input
```
  <form>
      <div>
        <label for="name">İsim: </label>
        <input type="text" id="name" />
      </div>
      <br />
      <div>
        <label for="surname">Soy İsim: </label>
        <input type="text" id="surname" />
      </div>
      <br />
      <div>
        <label for="email">E-Posta: </label>
        <input type="email" id="email" />
      </div>
      <br />
      <div>
        <label for="password">Parola: </label>
        <input type="password" id="password" />
      </div>
      <br />
      <div>
        <label>Cinsiyet</label> <br />
        <label for="women">Kadın</label>
        <input type="radio" name="sex" id="women" />
        <label for="man">Erkek</label>
        <input type="radio" name="sex" id="man" />
      </div>
      <br />
      <div>
        <label>Programla Dilleri</label> <br />
        <label for="python">Python</label>
        <input type="checkbox" name="langs" id="python" />
        <label for="javascript">Javascript</label>
        <input type="checkbox" name="langs" id="javascript" />
      </div>
      <br />
      <button type="submit">Göder</button>
    </form>
```

  <form>
      <div>
        <label for="name">İsim: </label>
        <input type="text" id="name" />
      </div>
      <br />
      <div>
        <label for="surname">Soy İsim: </label>
        <input type="text" id="surname" />
      </div>
      <br />
      <div>
        <label for="email">E-Posta: </label>
        <input type="email" id="email" />
      </div>
      <br />
      <div>
        <label for="password">Parola: </label>
        <input type="password" id="password" />
      </div>
      <br />
      <div>
        <label>Cinsiyet</label> <br />
        <label for="women">Kadın</label>
        <input type="radio" name="sex" id="women" />
        <label for="man">Erkek</label>
        <input type="radio" name="sex" id="man" />
      </div>
      <br />
      <div>
        <label>Programla Dilleri</label> <br />
        <label for="python">Python</label>
        <input type="checkbox" name="langs" id="python" />
        <label for="javascript">Javascript</label>
        <input type="checkbox" name="langs" id="javascript" />
      </div>
      <br />
      <button type="submit">Gönder</button>
    </form>

1. **form** tagini kullanarak inputların değerlerini submit edebileceğimiz yani kullanıcıdan aldığımız verilerin hepsini istediğimiz bir alana (ör. backend) gönderebileceğimiz bir yapı oluştururuz.
2. burada oluşturduğumuz label lar inputlar için bir önbilgi/başlık olarak kullanılır. 
3. aynı zamanda label içerisinde bulunan **for** ile input içerisinde bulunan **id** tanımını eşlememiz halinde label input ile bağlanı kuracak ve beraber çalışacaklardır.
4. inputlar type içeriği barındırır. type özellkleri **radio, button, checkbox, text, color, date,email, image, number, sumbit...** gibi kullanım amacına göre birçok type özelliği barındırır. 

## Ders03

3'üncü derste html ile css bağlantıları yapılmıştır ayrıca semantic html taglerinden bahsedilmiştir.

### css implamentation
html dökümanına dışarıdan bir css implemente etmek için: 

 `<link rel="stylesheet" href="box.css" />`

 link tagi ve belirlediğimiz adresi head tagleri arasına dahil etmemiz gerekir.

 veya 

```
<style>
      header,
      footer {
        height: 100px;
        background-color: rgb(9, 132, 213);
        width: 100%;
      }
      nav {
        height: 100px;
        background-color: rgb(255, 0, 0);
        width: 100%;
      }
</style>
```
gibi style taglerinin içerisinde de yazabiliriz.

veya

`<h1 style="color: red; font-size: 40px;">Hello World</h1>`
gibi inline da yazabiliriz.

### semantic html
![](../../../../Dersler/Ders03-Html-Uygulama/Html5-Sematik-Tags.jpg)