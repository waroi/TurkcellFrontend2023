
# E-Ticartet Sayfası

- 1. ödevdeki e-ticaret sayfasını json-server ile yapacağız.
- Ürünleri get ile json-server'dan alıp listeleyecek (ürün adı, fiyatı, görsel, kategori ve stok adedi)
- ürün eklemek için form olacak, json-server'a post ile eklenecek.
- ürün silme butonu olacak, json-server'dan delete ile silinecek.
- ürün güncelleme butonu olacak, json-server'dan put ile güncellenecek.
- kategoriye göre filtreleme yapılabilecek

- sepet için json-server'da yeni bir data oluşturulacak.
- sepete ekle butonu olacak, sepete eklenecek (json-server'daki).
- satın al dendiği zaman sepet boşaltılacak. (json-server'daki), satın alınan ürünlerin adetleri stoktan düşülecek stokta kalmadıysa sepete ekle butonu ürünlerde disable olacak. (stok yok)
- ürün eklerken aynı isimde ürün ise yeni eklemeyecek stok countu artacak.

- sıralama yapabilecek (fiyat, başlık)
- arama (ürün adı) inputu olacak, listede filtreleme yapacak
- ürün ekleme formunda validasyonlar olacak.
- ürünü sepete eklerken bir kontrol olacak stoktan fazla eklenemez.
- sağ üstte sepet bölümü olacak, sepete eklenen ürünler listelenecek, ürün adedi arttırılıp azaltılacak, ürün silinecek.
- sepetteki ürün adedi ürün çeşiti kadar olacak. (ürün çeşidi 3 ise sepetteki ürün adedi 3 olacak) (3 elma, 2 armut, 1 portakal)
- sepette ürün adedi artmalı azalmalı.
