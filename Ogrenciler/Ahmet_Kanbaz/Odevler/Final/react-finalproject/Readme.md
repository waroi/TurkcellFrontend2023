# Turkcell React Bootcamp Final Projesi

## Proje Hakkında
Projemiz, React kullanılarak geliştirilen bir web uygulamasıdır. Uygulama, kullanıcıların yeni kayıt oluşturabilecekleri ve giriş yapabilecekleri bir yapıya sahiptir. Kullanıcılar, kayıt oluşturduktan sonra giriş yapabilir ve uygulamayı kullanmaya başlayabilirler. Kullanıcı yeni kayıt oluşturduktan sonra kullanıcı müşteri olarak belirleniyor ve sisteme girişi sağlanıyor. Ancak json server içerisinde kullanıcının rolü manuel olarak admin olarak değiştirilebilir.  
Admin olan kullanıcılar, ürünlerin bilgilerini güncelleyebilirler.  
Yeni bir kullanıcı oluştuğunda kullanıcıya ait bilgiler local storage'da tutulur. Çünkü kullanıcı sayfayı kapatsa da sayfayı yenilese de tekrar giriş yapmasının önüne geçilmelidir.  
Aynı anda iki farklı kullanıcı aynı ürünü sepete ekledikten sonra bir kullanıcı ürünü satın aldığında diğer kullanıcı da ürünü satın almak istediği zaman eğer güncel stok sayısı sepette bulunan adet sayısından az ise kullanıcıya uyarı verilerek ürün sepetten çıkarılır.

## Kullanılan Teknolojiler
- HTML
- CSS
- JavaScript
- React
- Bootstrap
- React Router
- React Hooks
- Redux
- Formik
- Yup
- Axios
- React-Toastify
- React-Bootstrap
- Json Server

## Proje Nasıl Çalıştırılır
Projeyi çalıştırmak için öncelikle projenin bulunduğu klasörde terminal açılır ve aşağıdaki komut çalıştırılır.  
```npm install```

Daha sonra aşağıdaki komut çalıştırılır.  
```npm start```

Json server çalışmaz ise ilk olarak api dosyası içerisinde terminal açılır ve aşağıdaki komut çalıştırılır.  
```json-server --watch database.json```

Eğer proje çalışmaz ise proje adının içerisinde terminal açılır ve aşağıdaki komut çalıştırılır.  
```npm run dev```

### Uyarı !
Proje çalıştırılmadan önce json server çalıştırılmalıdır. Aksi takdirde proje çalışmayacaktır.  

Json serverdan kaynaklı sorunlar oluşabilir. Eğer json server kaynaklı bir sorun oluşursa json server kapatılıp tekrar açılmalıdır. Aynı zamanda locale storage içerisinde bulunan isLogin isimli key silinmelidir.

#### Github Linki
GitHub profilime ulaşabilmek için: [Ahmet Kanbaz](https://github.com/ahmetkanbaz)