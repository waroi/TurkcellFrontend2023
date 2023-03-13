[Ders Notlarına Geri Dön](../../README.md)

# Ders 03 Notlarım

Birinci haftanın üçüncü dersinde ise Semantic HTML nedir? Nasıl uygulanır bunlar üzerinde durduk. CSS'te inline, internal , extarnal olarak stillendirmeler nasıl yapılır bunlar üzerine konuştuk. Sonrasında ise Semantic HTML yapısını kullanarak öğrendiğimiz CSS bilgileri ile grup çalışması yaparak basic bir Web sitesi tasarladık.

## Semantic Html Nedir?

HTML5 ile kullanım imkanına kavuşan anlamlı etiketlerdir yani geliştirici ve tarayıcıyı için anlamlı bir karşılığı vardır. Dolayısıyla, tarayıcı tarafından gerçekleştirilen işlemlerde bilgileri içerisinde bulundukları etiketlere göre anlamlandırılmaları kolaylaşmaktadır.
Yapıyı semantik etiketlerle ele aldığımızda daha anlamlandırılabilir bir yapı ortaya çıkar. Diğer yandan, id ve class tanımlarına olan zorunluluğumuz da ortadan kalkacaktır. Elbette semantik etiketler bizim için yeni bir ifade değil. `form`, `table`, `ul-ol`, `img` gibi içeriğine dair anlam ifade eden etiketleri uzun zamandır kullanmaktayız.

    <body>
        <header>Header</header>
        <nav>Nav</nav>
        <div  class="row">
        <article>
        Article
        <section>Section</section>
        </article>
        <aside>Aside</aside>
        </div>
        <footer>Footer</footer>
    </body>

<img src="https://static.semrush.com/blog/uploads/media/cc/85/cc85d452a743e27f68d426df35e4da7d/EN-Semantic-Search-Non-Semantic.webp" width="500" height="500"/>

## CSS'e Giriş

### CSS Nedir?

En sevdiğim anlatımlardan biri olan ; HTML'i bir iskelet yapısına benzettiğimiz zamana header , body ve footer bölümlerinden oluştuğunu görebiliriz. CSS ise bu iskelet yapısının görsel olarak bize hitap edebileceği bir görüntü ortaya sunan kas sistemimizi ve üzerimizde bulunan giysilerimizi , saç rengimizi vs temsil eder diyebiliriz..
Bunu şu görselle de ifade etmek mümkün..

<img src="https://scaler.com/topics/images/html-and-css-meme.webp" width=400/>

Yani kısacası biz yazdığımız kodlara CSS sayesinde görsellik kazandırmış oluruz :)

**Css kodlarımızı 3 farklı şekilde tanımlayabiliriz. Bunlar;**

- Inline
- Internal
- External css, yöntemleridir.

### Inline Css Nedir ve Nasıl Kullanılır ?

Sadece tanımlandığı etiket için geçerli olmasını istediğimiz css kodlarımızı inline olarak tanımlarız.

    <img src="https://scaler.com/topics/images/html-and-css-meme.webp" width=400/>

Inline olarak tanımladığımız css kodları sadece css kodunun tanımlandığı `<img>` etiketi için uygulanır ve resim genişliği 400px olur.

### Internal Css Nedir ve Nasıl Kullanılır ?

Internal css **<head> </head>** etiketleri arasına **<style> </style>** etiketleri eklenerek kullanılır.

     <style>
       h1 {
       color: red,
        }
     </style>

Bu sayede `<h1>` etiketleri için yazı rengi kırmızı olarak ayarlanmış olur.

### External Css Nedir ve Nasıl Kullanılır ?

Eğer tanımladığımız css kodları birden fazla html sayfasını ilgilendiriyor ise bu durumda **.css uzantılı** bir dosya oluşturup bu dosya içerisine css kodlarımızı tanımlamamız gerekir.

    <head>
       ...
       <link rel="stylesheet" href="style.css">
       ...
    </head>

Oluşturduğumuz Css dosyası çalıştığımız klasörle aynı dizinde ise bu şekilde ekleyebiliriz. Html taglarımıza vereceğimiz class ve id'leri kullanarak Css dosyamızda stillendirmeler yapabiliriz.

##### Class , aynı stil özelliklerini paylaşan birden fazla HTML elementini gruplamak için kullanılır. Bir elemente birden fazla class özniteliği atanabilir ve class isimleri boşluklarla ayrılır. CSS'te, class isimleri noktalı virgülle ayrılır ve bir CSS kurallar bloğu, birden fazla class ismine sahip elementlere aynı stil özelliklerini uygulayabilir.

     <div class="menu-item">Öğe 1</div>
     <div class="menu-item">Öğe 2</div>
     <div class="menu-item">Öğe 3</div>

Bu sayede aynı anda birden fazla öğeye css verebiliriz.

##### id ise , TC kimlik numarası gibi benzersizdir.

    <h1 id="page-title">Sayfa Başlığı</h1>

> Kodumuzda 3 farklı stillendirme şeklini de kullanırsak. Bu durumda bir
> öncelik sıralaması devreye girecektir. Öncelik sıralaması şu şekildedir :
>
> 1.  Inline
> 2.  Internal
> 3.  External
