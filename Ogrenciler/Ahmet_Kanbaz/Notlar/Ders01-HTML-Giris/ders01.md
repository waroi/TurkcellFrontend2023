# Ders-01: HTML Giriş
## Konular: H1-H6, a, span, div, img, p, sıralı ve sırasız listeler

&emsp; &emsp; HTML, web sayfalarını oluşturma aşamasında kullanılan standart bir metin dili olup açılımı “Hyper Text Markup Language” şeklindedir. HTML bir programlama dili değildir ve etiketler ile nitelikler kullanılarak web sayfaları şekillendirilebilir. Web sitesinin iskeletini oluşturmada kullanılır.
HTML’de kullanılan kod ne olursa olsun tümü “<” ile başlayarak “>” ile bitmelidir.
Dosya adındaki “.html” uzantısı dosyanın  bir HTML belgesi olduğunu belirtir.
### HTML Belge Yapısı <br>
**1.**	```<!DOCTYPE html>```: Tüm HTML belgelerinin başladığı koddur.  
**2.**	```<html>```: Kök etiket olarak da bilinen bu kod kısmında ise tüm HTML kodları bu iki etiket arasında tanımlanmaktadır.  
**3.**	```<head>```: Bu etiket alanı içerisine eklenen içerikler web sayfasında görünmez. CSS dosyalarını, style elemanlarını, web sayfasının dili bu alanda bulunur.  
**4.**	```<title>```: Web sitesinin başlık alanı tanımlanmaktadır. "title" etiketi de "head" etiketlerinin arasında bulunmaktadır.  
**5.**	```<body>```: Web sayfasının görünen yüzüdür. Yani kullanıcı tarafından web sitesinde görünecek olan kısımlar bu etiketler arasına eklenmektedir. Başlıklar, paragraflar, resimler, linkler, tablolar gibi HTML öğelerini içerir. "body" etiketi sadece 1 defa kullanılmaktadır.  
**6.**	```<meta charset=”utf-8”>```: Web tarayıcıların HTML sayfasındaki karakterlerin ne olduğunu anlaması içindir. Hangi karakteri kullandığımızı belirterek tarayıcının anlamasını sağlıyoruz.  

#### HTML Etiketleri
**1. Başlık Etiketleri**  
&emsp; &emsp; HTML temelde 6 başlık öğesini destekler. H1 ve H6 arasındaki başlık etiketleridir. H1 etiketi önemlidir ve Google tarafından sayfa içeriği hakkında bilgi alınabilmektedir. Bu yüzden bir sayfada bir adet H1 etiketi bulunması önemlidir. En büyük olan H1 etiketi olup H6 etiketi ise en küçük başlık etiketidir. <br>
	```<h1>Başlık 1</h1>```  
	```<h2>Başlık 2</h2>```  
	```<h3>Başlık 3</h3>```  
	```<h4>Başlık 4</h4>```  
	```<h5>Başlık 5</h5>```  
	```<h6>Başlık 6</h6>```  
	&emsp; &emsp; şeklinde kullanılmaktadır.

**2. Link Etiketi (a Etiketi)**  
a etiketini bağlantı metinleri oluşturabilmek ve bu bağlantılar ile farklı sayfalara geçiş için kullanılmaktadır. Bu etiketin en önemli özelliği “href” özelliğidir. “href” ile bağlantı oluşturmak istediğimiz sayfanın URL’si verilebilir.
	Tüm tarayıcılarda linkler,
-  Ziyaret edilmiş linkler mor ve altı çizili,
-  Ziyaret edilmemiş linkler mavi ve altı çizili,
-  Link aktifken kırmızı renkte ve altı çizili
  şeklinde varsayılan olarak görünmektedir. <br>

“href” özelliği tanımlanmamış bir a etiketinde “target” özelliği de kullanılamaz. “target” özelliği tanımlanmamış ise bağlantılar aynı sekme içerisinde açılır. Ancak target = “_blank” yazılırsa “href” kısmına yazılan link’i yeni sekmede açacaktır.  
“href” kısmına sadece farklı bir sayfanın URL’si değil aynı zamanda geliştirmekte olduğumuz projede bulunan farklı bir HTML sayfasına da yönlendirme yapabiliriz. Bunun için de href kısmına HTML sayfasının adını yazarak yönlendirmeyi gerçekleştirebiliriz.  
```<a href = https://github.com/ahmetkanbaz target = “_blank”>Ahmet KANBAZ (GitHub)</a>```  
şeklinde kullanılabilir.  

**3. Paragraf Etiketi (p Etiketi)**  
p etiketi paragraf oluşturmak için kullanılır. Tarayıcılarda "p" etiketinden önce ve sonra biraz boşluk bırakır. p etiketleri arasına yazmış olduğumuz metinde alt satıra geçmek bir şey ifade etmez. Alt satıra geçmeyi sağlayan HTML etiketleri bulunmaktadır. Bu etiketlerin kullanılması daha doğru olacaktır.   
```<p>Yazı buraya yazılacaktır.</p>```  

**4. span Etiketi**  
Span etiketi, inline bir etiket olup genel bir satır içi öğesidir. Yeni bir satır başlatmaz ve sayfada sadece içeriği kadar yer kaplamaktadır. Span içerikle aynı hizada görünen metin, bağlantı, resim gibi HTML öğelerinin bölümlerinde kullanılır.  
```<span>Span Deneme HTML</span>```  

**5. div Etiketi**  
Div etiketi, block etiket olup HTML sayfasında bir bölüm oluşturabilmeye yaramaktadır. Block etiket olduğu için genişliği satırın hepsini kapsamaktadır. Yüksekliği ise içerisinde bulunan öğelerin sahip olduğu yüksekliği kadardır. Divler iç içe de olabilir ve divlerin içerisinde diğer HTML etiketleri de bulunabilir.  

```<div>Div Deneme HTML</div>```  
```<div><p>Div İçerisinde p etiketinin kullanımı.</p></div>```  

**6. Resim Etiketi (img Etiketi)**  
HTML belgesine görüntü yani fotoğraf eklemek için img etiketi kullanılır. İmg etiketi ile src ve alt özellikleri de kullanılmalıdır. img etiketinin özelliği olan src kısmına görüntü için local veya adres verilebilmektedir. Yani bir görüntünün adresi src kısmına eklenebilir veya projemizde bulunan bir görüntüyü de src kısmına ekleyebiliriz.  
```<img src = “https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr” alt = “logo” width = “200px” />```  
```<img src = “logo.png” alt = “logo2” width = “200px” />```  

**7. Sıralı Listeler (ol Etiketi)**  
HTML’de sıralı liste yapabilmek için ol etiketi kullanılır ve liste elemanlarının başında 1, 2, 3 gibi veya a, b, c gibi değerler bulunur. Varsayılan değer olarak 1, 2, 3 gibi değerler gelmektedir. Ancak bu sıralama şekli değiştirilebilir. Bunu da type özelliği kullanılarak yapmak mümkün hale gelmektedir. Listenin her bir elemanını belirtmek için de li etiketi kullanılır ve bu li etiketinin arasına listenin her bir elemanı yazılmaktadır.  
```<ol type="1"><li>Çay</li><li>Kahve</li><li>Süt</li></ol>```
**8. Sırasız Listeler (ul Etiketi)**  
HTML’de sırasız liste yani numaralandırma olmadan liste oluşturulmak istenildiği zaman ul etiketi kullanılır ve sıralı listelerde olduğu gibi listenin her bir öğesini ekleyebilmek için de li etiketi kullanılmaktadır. Liste elemanlarının görünümünü değiştirebilmek için de type parametresi kullanılır.  
```<ul type="square"><li>Çay</li><li>Şeker</li><li>Kaşık</li></ul>```
