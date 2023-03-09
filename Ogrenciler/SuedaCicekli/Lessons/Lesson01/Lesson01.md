[Ders Notlarına Geri Dön](../../README.md)

# Ders 01 Notlarım

Bu ders'de html'e giriş yapıldı. Temel olarak HTML ve genel yapısı vve bazı tag'lerden bahsedildi. Ders sırasında anlatılan örnekler aşağıda mevcuttur.

## H Etiketleri (Başlık)

### H1 : En büyük başlık boyutunu temsil eder.

`<h1>Sueda Çiçekli</h1>`

### H2 : İkinci büyük başlık boyutunu temsil eder.

`<h2>Sueda Çiçekli</h2>`

### H3 : Üçüncü büyük başlık boyutunu temsil eder.

`<h3>Sueda Çiçekli</h3>`

### H4 : Dördüncü büyük başlık boyutunu temsil eder.

`<h4>Sueda Çiçekli</h4>`

### H5 : Beşinci büyük başlık boyutunu temsil eder.

`<h5>Sueda Çiçekli</h5>`

### H6 : En küçük başlık boyutunu temsil eder.

`<h6>Sueda Çiçekli</h6>`

Bu etiketler, web sayfalarında metin başlıklarını belirlemek için kullanılır ve sayfadaki içeriğin hiyerarşisini belirlemeye yardımcı olur. `<h1>` genellikle sayfanın ana başlığı olarak kullanılırken, `<h2>` alt başlıklar veya alt konular için kullanılabilir. `<h3>` ve daha küçük başlıklar daha spesifik alt konuları belirtmek için kullanılabilir.

<hr>

## `<p>` Paragraf Etiketi

`<p>` etiketi paragraf manasına gelir. Yazılarımızı bu tag içerisinde yazabiliriz. Paragraflar [blok elementleridir](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements).
`<p>Sueda Çiçekli</p>`

## `<span>` Etiketi

`<span>` etiketi özelliksiz bir etikettir.`<span>` etiketi genellikle metin içeriğini gruplamak için kullanılır ve bir metin bloğu oluşturmaz. Bu sayede metinlere style, id, class vererek özelleştirebiliriz.
`<p>Selam ben <span style="color:red;">Sueda.</span></p> `

## `<div>` Division Etiketi

`<div>` etiketi, belirli bir HTML bloğu içinde gruplamak için kullanılır. `<div>` etiketi bir blok oluşturur, yani bir sonraki öğenin bir alt satırda başlamasını sağlar. Genellikle web sayfalarının bölümlerini ve bölümlerin birleşimlerini tanımlamak için kullanılır.

> `<span>` etiketi genellikle metin içeriği için kullanılırken, `<div>`
> etiketi belirli bir HTML bloğunu gruplamak için kullanılır ve web
> sayfalarının düzenlenmesinde kullanışlıdır.

## `<a>` Anchor Etiketi

HTML'deki `<a>` etiketi, **href** özelliği ile birlikte kullanılarak web sayfalarına, dosyalara, e-posta adreslerine, aynı sayfadaki konumlara veya bir URL'nin adresleyebileceği herhangi bir şeye bağlantı oluşturmak için kullanılır.

    <a  href="https://gelecegiyazanlar.turkcell.com.tr/"  target="_blank">Turkcell Geleceği Yazanlar</a>

> `target="_blank"` özelliği, bir HTML bağlantısının, kullanıcının
> bağlantıya tıkladığında yeni bir tarayıcı sekmesinde açılmasını
> sağlar.

## `<ol>` Ordered List Etiketi

Ordered List sıralanmış liste anlamına gelir.

    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ol>

Aşağıdaki gibi görünür:

 <ol>
	    <li>HTML</li>
	    <li>CSS</li>
	    <li>JavaScript</li>
	    <li>React</li>
    </ol>
    
##  ``<ul>`` Unordered List Etiketi
Unordered List sırasız bir öğe listesini temsil eder.

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

Aşağıdaki gibi görünür:

 <ul>
	    <li>HTML</li>
	    <li>CSS</li>
	    <li>JavaScript</li>
    </ul>
    
##  ``<img>``Image  Etiketi
`<img>` etiketi belgeye resim eklememizi sağlar.

    <img  src="./images/logo.png"  alt="Geleceği Yazanlar Logo"  width="300px">

src **(required)** : Eklemek istediğimiz görüntünün linkini veya klasörde bulunduğu dizini belirtir.
alt **(optional)** : Eklenen görüntünün açıklamasını oluşturur , linke ulaşılamadığı zaman bu açıklama ekranda görünür.
