## Turkcell Geleceği Yazanlar Bootcamp Final Ödevi

## Proje Kurulumu

- Projeyi bilgisayarınıza indirin.
- Projeyi çalıştırmak için terminalde proje dizinine gidin.

- `cd frontend` komutunu çalıştırın.
- `npm install` komutunu çalıştırın.
- `npm start` komutunu çalıştırın.

- Proje çalışmazsa ya da eksik çalışırsa `node_modules` klasörünün `frontend` klasörü içerisinde yüklü olduğundan emin olun, eğer başka bir yerde yüklü ise silip en baştan adımları eksiksiz tamamlayın.
- Ürünler gelmez ise `db.json` dosyasını kontrol edin, eğer içerisinde ürünler yok ise projeyi tekrar indirin.

### Proje Tanımı

- Verilen figma tasarımına göre bir web sitesi geliştirilmesi, uygun componentler kullanılarak eksik kısımların tamamlanması gerekmektedir.
- Verilen tasarımda, verilen API ile işlem yapılması gerekmektedir.
- Web 992px maks olacak şekilde web ve mobil cihazlar için responsive olması gerekmektedir.

### Proje Detayları

#### Admin Giriş

- Admin kullanıcı girişi: admin : admin
- User kullanıcı girişi: test : 12qwaszx

#### Sayfalar

- Signin
- Signup
- Home
- Category
- Product
- Cart
- 404

#### Detaylar

- Verilen ölçülerde düzgün şekilde bozulmadan responsive yapıya uymaktadır.
- Kullanıcı işlemlerinden sonra bilgilendirici alertlar çıkmaktadır.
- Cart sayfasında çok fazla ürün satın alımı yapıldığında Json-Server dan kaynaklı backend overload olup durabiliyor, yaşanırsa tekrardan başlatma gereklidir.
- Cart sayfasında ürün adetleri butonlar ya da manuel şekilde arttırılıp azaltılabilir.
- Cart sayfasında ürünlerin kontrolleri ilk açılışta ya da satın alım butonuna basıldığında yapılmaktadır, adette değişiklik olursa satın alma işlemi olmaz uyarı verilir.
- Cart sayfasında ürünlerin stoklarına göre değişiklik yapılır, ilk girişte ve satın alım esnasında kontrol edilir.
