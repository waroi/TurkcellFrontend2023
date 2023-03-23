# Ders-01: HTML Giriş
## Konular: H1-H6, a, span, img, p, sıralı ve sırasız listeler

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
	```<H1>Başlık 1</H1>```  
	```<H2>Başlık 2</H2>```  
	```<H3>Başlık 3</H3>```  
	```<H4>Başlık 4</H4>```  
	```<H5>Başlık 5</H5>```  
	```<H6>Başlık 6</H6>```  
	&emsp; &emsp; şeklinde kullanılmaktadır.

**2. Link Etiketi (a Etiketi)**
	&emsp; &emsp; a etiketini bağlantı metinleri oluşturabilmek ve bu bağlantılar ile farklı sayfalara geçiş için kullanılmaktadır. Bu etiketin en önemli özelliği “href” özelliğidir. “href” ile bağlantı oluşturmak istediğimiz sayfanın URL’si verilebilir.
	Tüm tarayıcılarda linkler,
-  Ziyaret edilmiş linkler mor ve altı çizili,
-  Ziyaret edilmemiş linkler mavi ve altı çizili,
-  Link aktifken kırmızı renkte ve altı çizili  
&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;şeklinde varsayılan olarak görünmektedir. <br>
	&emsp; &emsp; “href” özelliği tanımlanmamış bir a etiketinde “target” özelliği de kullanılamaz. “target” özelliği tanımlanmamış ise bağlantılar aynı sekme içerisinde açılır. Ancak target = “_blank” yazılırsa “href” kısmına yazılan link’i yeni sekmede açacaktır.  
	&emsp; &emsp; “href” kısmına sadece farklı bir sayfanın URL’si değil aynı zamanda geliştirmekte olduğumuz projede bulunan farklı bir HTML sayfasına da yönlendirme yapabiliriz. Bunun için de href kısmına HTML sayfasının adını yazarak yönlendirmeyi gerçekleştirebiliriz. <br>  
	```<a href = https://github.com/ahmetkanbaz target = “_blank”>Ahmet KANBAZ (GitHub)</a>```  
	&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; şeklinde kullanılabilir.  

**3. Paragraf Etiketi (p Etiketi)**  
	&emsp; &emsp; p etiketi paragraf oluşturmak için kullanılır. Tarayıcılarda "p" etiketinden önce ve sonra biraz boşluk bırakır. p etiketleri arasına yazmış olduğumuz metinde alt satıra geçmek bir şey ifade etmez. Alt satıra geçmeyi sağlayan HTML etiketleri bulunmaktadır. Bu etiketlerin kullanılması daha doğru olacaktır.
