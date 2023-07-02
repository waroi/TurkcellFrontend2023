# Turkcell Geleceği Yazanlar Bootcamp Final Çalışması

Bootcamp sürecinin sonunda verilen final çalışması için hazırlanmış projedir.

## Proje Çalıştırma

Projeyi çalıştırmak için sadece terminale "npm run dev" yazmak yeterlidir. Json-server ve vite bileşenleri concurrently kütüphanesiyle birlikte çalışabilmektedir.

## Projede Kullanılan Kütüphaneler

-- Reduxjs-toolkit
-- formik
-- yup
-- react-dom
-- react-redux
-- react-router
-- react-router-dom
-- react-toastify
-- styled-components

## İçindekiler

1-Klasörler:

> Öncelikle "final" klasörü iki klasörden oluşur. Bunlar "db" ve "final-project" 'dir. İlk klasör db veritabanı için tutulan json dosyasının konumudur. Diğer klasör ise react projesinin dosyalarının tamamının tutulduğu klasördür.

> Final-project klasörü içerisinde bulunan temel bileşenler dışındaki klasörler:

-- Assets:İçerisinde ikonlar,fotoğraflar ve temel css 'lerin bulunduğu klasördür.

-- Components: İçerisinde sayfalarda özellikle çokça kez kullanılabilen küçük birimler oluşturulmuş sayfadır. Ayrıca her birim kendi klasörü içerisinde stil dosyası ile beraber bulunmaktadır.

-- Icon: Sayfalar arasında ikonlar veya fotoğraflar için path sorunlarının önüne geçmek amacıyla oluşturulmuş yardımcı bir klasördür. İçerisinde "Icon" bileşeni sayesinde diğer yapılarda istenilen ikonu veya fotoğrafı kolaylıkla çağrısı yapılabilmektedir.

-- Pages: Proje içerisinde oluşturulan tüm sayfaların tanımlandığı klasördür.

-- Redux: Projede bulunan ve birden fazla yerde kullanılması gereken veritabanı bilgileri bu klasörde işlenmiştir. İçerisinde kullanılacak veri tabanına göre slice yapıları oluşturulmuş ve storeda bu yapılar belirtilmiştir.

-- Router: Projede tüm yönlendirme işlemleri bu klasörde yapılmıştır. İçerisinde oluşturulan routes nesnesi ile tüm projede yönlendirmeler belirlenmiştir.

-- Schemas: Projede yer alan formlar için doğrulama işlemleri "yup" kütüphanesi ile birlikte burada tanımlanmıştır.

-- Views: Kullanıcı ile etkileşime girilen büyük parçalar burada oluşturulmuştur.

2-Klasör İçindeki Yapılar:

-- Components/Button: Projede bulunan butonların büyük bir çoğunluğu buradan tanımlanmıştır.

-- Components/CardList: Projede bulunan 8'li veya 4'lü kartların bulunduğu bölmeler burada tanımlanmıştır.

-- Components/CartTable: Projede sepet sayfasında temel ekranın tanımlandığı kısımdır.

-- Components/DetailTable: Projede detay sayfasında slider yapısı ve ürün detaylarının gösterildiği bölümün tanımlanmış klasörüdür.

-- Components/Footer: Projede her sayfada bulunan footer bölümünün tanımlandığı klasördür.

-- Components/Forms: İçerisinde giriş ve kayıt sayfaları için form ve temel ekran yapısı bulunduran klasördür.

-- Components/Headline: Anasayfa üzerinde navbar altında bulunan bileşenin tanımlandığı yerdir.

-- Components/İconList: Anasayfa üzerinde bulunan arka arkaya ikonların listelendiği bölümün oluşturulduğu klasördür.

-- Components/MidAds:Anasayfa üzerinde aralarda bulunan reklamlar için oluşturulmuş klasördür.

-- Components/Modal: Proje içerisinde modal kullanmak için açılmış klasördür ancak kullanılmamıştır. Admin'nin ürünleri değiştirmesi için düşünülmüştür.

-- Components/Navbar: Projede her sayfada bulunan navbar bileşeni için açılmış klasördür.

-- Components/News: Sayfa altlarında bulunan haberler için açılmış klasördür.

-- Components/ProductAds: Ürünler sayfasında bulunan reklam için hazırlanmış klasördür.

-- Components/Registr: Navbar üzerinde bulunan kayıt olma butonu için hazırlanmıştır.

-- Views/AllList: Ürünler sayfasında tüm ürünlerin sergilendiği kısım için oluşturulmuş yapının bulunduğu klasördür.

-- Views/ProductList: Ürünlerin 8'li veya 4'lü olarak sıralanırken gerekli işlemler burada gerçekleştirilmiştir.

## Projede Tamamlanan Görevler

- Kullanıcılar, sisteme kayıt olabilmelidir.
- Kullanıcılar, sisteme kayıt olduktan sonra sisteme giriş yapabilmelidir.

-Sepet, kullanıcıya ait bir veri olarak tutulacaktır.
-Sepet, kullanıcıya ait bir veri olarak tutulurken kullanıcının ID'si tutulacaktır.
-Sepet, kullanıcıya ait bir veri olarak tutulurken kullanıcının ID'si tutulurken kullanıcının ID'si doğru formatta tutulacaktır.
-Sepet, kullanıcının ID'si boş bırakılamaz.

-Ürünleri get ile json-server'dan alıp listeleyecek (ürün adı, fiyatı, görsel, kategori ve stok adedi)

-sepet için json-server'da yeni bir data oluşturulacak.
-sepete ekle butonu olacak, sepete eklenecek (json-server'daki).

-kategoriye göre filtreleme yapılabilecek
-sıralama yapabilecek (fiyat, başlık, kategori, a-z, z-a)

-kullanıcı ile etkileşime girilen her yerde toast mesajı olacak. (başarılı, hata, uyarı)

## Projenin Eksikleri

-satın al dendiği zaman sepet boşaltılacak. (json-server'daki), satın alınan ürünlerin adetleri stoktan düşülecek stokta kalmadıysa sepete ekle butonu ürünlerde disable olacak. (stok yok)

-arama (ürün adı) inputu olacak, listede filtreleme yapacak
-ürünü sepete eklerken bir kontrol olacak stoktan fazla eklenemez.
-sepet bölümü olacak, sepete eklenen ürünler listelenecek, ürün adedi arttırılıp azaltılacak, ürün silinecek.
-sepetteki ürün adedi ürün çeşiti kadar olacak. (ürün çeşidi 3 ise sepetteki ürün adedi 3 olacak) (3 elma, 2 armut, 1 portakal)
-sepette ürün adedi artmalı azalmalı, manuel olarak girilebilmeli.
-bir kullanıcı sepete mesela 5 ürün ekledi ama satın almadı, diğer kullanıcı bu ürünlerden bazılarını satın alarak sotoğu tüketti. ilk kullanıcı tekrar sepete girdiğinde ürünlerin stok adedi güncellenecek ve kullanıcıya uyarı verecek. Kullanıcı sayfayı kapatmadıysa satın al butonunda bu kontrol yapılacak.

-Responsive tasarım eksikleri
