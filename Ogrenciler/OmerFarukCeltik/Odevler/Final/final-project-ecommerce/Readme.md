# Turkcell GYGY 2023 final projesi

Bu proje istenilenler doğrultusunda bir e-commerce app niteliğinde oluşturulmuştur.

**Proje dizinine:**

`
npm install
`

ile eklentileri yükledikten sonra

`
npm run startapp
`

**scriptini yazarak proje ayağa kaldırılabilir.**

*Script 4 ayrı cmd modülü başlatarak projeyi ayağa kaldıracaktır.*

script içerikleri:
Script ile uygulama başlatıldığında 3 ayrı Veri Tabanı ayağa kaldırırlır ve uygulama başlatılır.

Veri tabanı içerikleri: 
* Ürün veri tabanı **--3005 portu**
* Kullanıcı veri tabanı **--3006 portu**
* Sepet veri tabanı **--3007 portu**

Bu veri tabanlarını ayrı ayrı ayağa kaldırmak için;

ürün veri tabanı için:
`npm run startserver`

Kullanıcı veri tabanı için:
`npm run startusers`

Sepet veri tabanı için:
`npm run startcard`

ile veri tabanları ayağa kaldırılıp ardından,
`npm run dev`

ile uygulama başlatılır.

### Proje İçerikleri Ve Dosyalama
 proje beraberinde **formik, yup, redux-toolkit, react-redux, Scss, Bootstrap, Json-Server, React-Toastify, Styled-Components** eklentileri kullanılmıştır.

* Proje dosyaları içerisinde proje bölümleri **./pages**
klasörü altında toplanmıştır.

* Proje bölümlerine yardımcı elemanlar olarak kullanılan componentler ise **./components** klasörü altında toplanmıştır.

* Proje geliştirilirken **styled components, Sass ve Bootstrap** yapıları beraber kullanılmıştır. 

* **./css ve ./sass** klasörleri altında **Bootstrap override dosyaları ve css dosyaları** bulunmaktadır.
* **./redux** içerisinde **her database için farklı slice yapıları** bulunmaktadır.
* Redux slice dosyaları ortak bir **store** tarafından provider'a gönderilmiştir.
* **./router** dosyası altında router yapısı oluşturulmuştur.
* **./schemas** içerisinde **formik ile beraber kullanılan schema elementleri** bir dosya altında export edilmiştir.
* Test Ürünü veri tabanına eklenmiştir.
* Kullanıcı logout yapmadığı sürece db de login statüsü açık kalacaktır.