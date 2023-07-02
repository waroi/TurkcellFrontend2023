# E-Commerce Uygulaması

Bu proje, Turkcell Geleceği Yazanlar Frontend Bootcamp final projesi olarak gerçekleştirilmiştir. React.js teknolojisi kullanılarak bir E-Commerce uygulaması geliştirilmiştir.

## Proje Kullanımı

Bu E-Commerce uygulamasında aşağıdaki özellikler bulunmaktadır:

- Kullanıcı kaydı ve girişi yapılabilmektedir. 
- Kullanıcı kayıt ve giriş yaptıktan sonra, bilgileri bir token'a aktarılır ve cookieler vasıtasıyla saklanır. 
- Bir kullanıcının token süresi 7 gündür. 7 gün sonra token süresi sona erer ve kullanıcıdan tekrar giriş yapması istenir. 
- Kullanıcılar, kayıt olmadan anasayfaya erişebilir ancak kategorilere, ürün detaylarına ve sepete erişemezler. 
- Kullanıcıların erişebileceği sayfalar, token üzerinden kontrol edilir.
- Kayıt olan kullanıcılar, ürünleri görebilir, ürünleri filtreleyebilir ve istedikleri ürünlerin detayına bakabilirler. 
- Detay sayfasında, stoklar dahilinde ürünü sepete ekleyebilirler. 
- Sepete eklenen ürünün miktarı, stok adedi ile sınırlıdır. 
- Kullanıcı, sepetinde kaç farklı ürün olduğunu, profil bölümündeki badge üzerinden görebilir ve sepete erişim sağlayabilir. 
- Sepette, kullanıcı ürün adetini stoklar dahilinde artırabilir, ürünlerin toplam tutarını görebilir ve istenilen ürünleri sepetten kaldırabilir. 
- Eğer kullanıcı admin ise, ürün detay sayfasında ürün detaylarını düzenleyebilir.
- Kullanıcı bilgisi, arama kutusu içeriği ve sepet bilgisi, global bir state olarak Redux üzerinde saklanır.

## Kurulum

Projenin kurulumunu ve başlatılmasını aşağıdaki adımlarla gerçekleştirebilirsiniz:

1. Proje dosyalarını indirin
2. Terminalde `npm i --force` komutunu çalıştırın (Bu komut, "react-magnifier" kütüphanesinin sorunsuz çalışabilmesi için gerekli olan bağımlılıkları yükler)
3. `npm run start` komutunu çalıştırın. Bu komut projeyi ve json-server'ı aynı anda başlatır.

## Kullanılan Teknolojiler ve Kütüphaneler

Proje, React.js kullanılarak oluşturulmuştur. Diğer önemli kütüphaneler:

- **Bootstrap**: Projenin genel stili ve düzeni için kullanıldı.
- **Formik & Yup**: Form kontrolleri ve validasyon için kullanıldı.
- **Redux Toolkit**: Uygulamanın global state yönetimi için kullanıldı.
- **React-Router-Dom**: Sayfalar arası yönlendirme için kullanıldı.
- **React-Magnifier**: Ürün detay sayfasında, ürünün fotoğrafına zoom yapmayı sağlar.
- **Swiper**: Ürün karuselleri oluşturmak için kullanıldı.
- **JS-Cookie & React-Cookie**: Cookie yönetimi için kullanıldı.
- **React-toastify**: Uygulama içerisindeki bildirimler için kullanıldı.
- **Json-Server**: Basit bir REST API mock up sunucusu olarak kullanıldı.
- **NPM-Run-All**: json-server ve projeyi aynı anda ayağa kaldırmayı sağlar.

## Geliştirme Araçları

Projenin geliştirilmesinde aşağıdaki geliştirme araçları kullanılmıştır:

- **Vitejs**: Frontend build tool olarak kullanıldı.
- **ESLint**: Kod kalitesini artırmak için kullanıldı.
- **Sass**: CSS preprocessor olarak kullanıldı.

Projeyi kullanırken veya geliştirirken herhangi bir sorunla karşılaşırsanız, lütfen bildirin.

İyi kodlamalar!
