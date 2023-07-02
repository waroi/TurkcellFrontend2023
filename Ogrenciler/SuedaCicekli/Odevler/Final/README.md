# Turkcell Gelecegi Yazanlar  
### " E-commerce App | Final Projesi"

![Geleceği Yazanlar Logo](https://gelecegiyazanlar.turkcell.com.tr/themes/custom/gyz/logo.svg)


## Açıklama
Bu, proje bir e-ticaret sitesi için gerekli olan temel yapıyı oluşturmayı amaçlamaktadır.
* Bu projede, kullanıcılar kayıt işlemiyle hesap oluşturabilir ve giriş yaparak ürün ve detay sayfalarına erişebilirler.
* Kullanıcı admin ise ürünlerde editleme işlemi yapabilir.
* Kullanıcı arama yapabilmek için Product sayfasına gitmelidir. Anasayfada arama çalışmamamktadır.
* Arama, filtreleme, sıralama gibi özellikler Product Sayfasında yer alır.

## Kurulum
# Trendfit

Bu proje, kullanıcıların kayıt olup giriş yaparak ürünleri düzenleyebildiği bir uygulamayı içermektedir.

## Kurulum

1. Depoyu bilgisayarınıza klonlayın.
2. Proje dizinine gidin: `cd proje-adı`
3. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın: `npm install`

## JSON Server'ı Başlatma

1. Terminali açın ve proje dizinine gidin.
2. Aşağıdaki komutu çalıştırarak JSON Server'ı başlatın: `npm run startserver`
3. JSON Server, `http://localhost:3000` adresinde çalışacaktır.

## React Uygulamasını Başlatma

1. Terminali açın ve proje dizinine gidin.
2. Aşağıdaki komutu çalıştırarak React uygulamasını başlatın: `npm run dev`
3. React uygulaması, varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## Kullanım

1. Tarayıcınızda uygulamayı açın: `http://localhost:5173`
2. Ana sayfada kayıt olmak için "Login" butonuna tıklayın.
3. Gerekli alanları doldurarak yeni bir kullanıcı oluşturun.
4. Oluşturduğunuz kullanıcıyla giriş yapmak için "Login" butonuna tıklayın.
5. Ürünler sayfasına erişim sağlayın ve istediğiniz düzenlemeleri yapın.
6. Admin yetkilendirmesine sahip olan kullanıcıyla giriş yaparak daha geniş bir düzenleme yetkisine sahip olabilirsiniz.


## Kullanıcı Bilgileri
Aşağıda yer alan kullanıcı bilgileriyle giriş yapabilirsiniz dilerseniz login ekranından register sayfasına ulaşıp register sayfasından form validasyon kurallarına uygun bir kullanıcı hesabı oluşturabilirsiniz :

### Admin yetkilendirmesi olan kullanıcı bilgileri:

E-posta: admin@admin.com 

Şifre: admin

### Admin yetkilendirmesi olmayan kullanıcı 

E-posta: sueda@gmail.com

Şifre: 123asdA



## Teknik Şartlar

- Proje React kütüphanesi kullanılarak geliştirildi.
- Proje React Router kullanılarak geliştirildi.
- Proje React Hooks kullanılarak geliştirildi.
- Proje React Redux Toolkit kullanılarak geliştirildi.
- Proje React Formik kullanılarak geliştirildi.
- Proje React Yup kullanılarak geliştirildi.
- Proje React Toastify kullanılarak geliştirildi.
- Proje Bootstrap ve Scss kullanıldı.
- Kullanıcıdan veri alınan bütün alanlar için formik kullanıldı.
- Ürünler için fakeapi'den esinlenildi fakat içerikte bazı değişiklikler yapılarak db.json üzerine istek atılarak veriler kullanıldı. 
- Veri tabanı olarak  json-server kullanıldı.
- Admin panelinde ürünler editlenip, silinebilme durumları eklendi.
- Sepete ekleme , sepetten ürün silme ,satın alma işlemleri gerçekleştirildi.
- Satın al dendiği zaman sepet boşaltıldı. Satın alınan ürünlerin adetleri stoktan düşülüp stokta kalmadıysa sepete ekle butonu ürünlerde disable'a çevrildi. 
- kategoriye göre filtreleme yapıldı.
- sıralama işlemleri gerçekleştirildi (fiyat, başlık, a-z, z-a)
- arama (ürün adı) inputu ile listede filtreleme işlemi gerçekleştirildi.
- ürünü sepete eklerken bir kontrol olacak stoktan fazla eklenemeyip toastify mesajı ile uyarı verildi.
- sepet bölümü olacak, sepete eklenen ürünler listelenecek, ürün adedi arttırılıp azaltılacak, ürün silinecek ,manuel olarak ürün adeti güncellenebilir hale getirildi.
- sepetteki ürün adedi ürün çeşiti kadar olacak şekilde hazırlandı. 
- bir kullanıcı sepete mesela 5 ürün ekledi ama satın almadı, diğer kullanıcı bu ürünlerden bazılarını satın alarak stoğu tüketti. ilk kullanıcı tekrar sepete girdiğinde ürünlerin stok adedi güncellenecek ve kullanıcıya uyarı verildi ve kullanıcı sayfayı kapatmadıysa satın al butonunda bu kontrol yapılacek duruma getirlildi
- kullanıcı ile etkileşime girilen her yerde toast mesajı verildi. (login işlemi başarılı , kayıt işlemi başarılı , sepete ekleme başarılı )


## Örnek alınan Proje Tasarımı

<https://www.figma.com/file/huLzYoVQ8i78IzsLyYuuhZ/%5BFREE-TEMPLATE%5D-eCommerce-Website---Monito-Pets-for-Best-(Community)-(Community)-(Copy)?type=design&node-id=8%3A32&mode=design&t=6h1r2xwtRwA1tGAd-1>






