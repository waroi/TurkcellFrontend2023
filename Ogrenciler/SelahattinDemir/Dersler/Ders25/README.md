[Turn Back](../../)

<h1 align="center">Ders25 - Kod Nasıl Yazılmalı</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

## Kod Nasıl Yazılmalı?

&#10147; Bir yazılım geliştiricisi olarak, yazdığınız kodun okunaklı, ölçeklenebilir ve sürdürülebilir olması önemlidir. Bu, gelecekteki değişiklikler ve iyileştirmeler için kodunuzu yeniden kullanmanızı veya başka bir geliştirici ile işbirliği yapmanızı kolaylaştırır. Ancak, kodun yazılması kadar onun nasıl yazılacağı da önemlidir.

#### 1. Kodunuzu küçük parçalara ayırın

&#10147; Kodunuzu küçük parçalara ayırmak, daha okunaklı ve anlaşılır hale getirir. Fonksiyonları, sınıfları veya modülleri kullanarak kodunuzu mantıksal bir şekilde ayırın. Böylece, kodunuzun her bir parçası, belirli bir işlevi yerine getirir ve kolayca anlaşılabilir hale gelir.

&#10147; Örneğin, bir web uygulaması yazıyorsanız, kullanıcı kimlik doğrulama işlevselliğini ayrı bir modüle yerleştirebilirsiniz. Bu, kodunuzu daha anlaşılır hale getirir ve doğrulama işlevselliğini başka bir uygulamada da yeniden kullanmanızı kolaylaştırır.

    function toplama(a, b) {
      let c = a + b;
      return c;
    }

&#10147; Bu fonksiyon, iki sayıyı toplayan basit bir işlem yapar ve sonucunu geri döndürür. Fonksiyonu kullanmak için, aşağıdaki gibi parametreleri farklı değerlerle çağırabiliriz:

    let x = 2;
    let y = 3;
    let z = toplama(x, y);
    console.log(z);

&#10147; Bu örnek, fonksiyonun küçük bir parçaya ayrıldığını ve iki sayının toplama işlemini yürüttüğünü göstermektedir. Bu fonksiyonu daha sonra aynı işlemi farklı parametrelerle çağırarak kullanabiliriz. Bu, kodun daha okunaklı, tekrar kullanılabilir ve ölçeklenebilir hale gelmesini sağlar.

#### 2. Adlandırmalarınız anlamlı olsun

&#10148; Kodunuzu anlamlı bir şekilde adlandırmak, kodunuzun okunaklılığı açısından önemlidir. Fonksiyonlarınızın, sınıflarınızın veya değişkenlerinizin adları, ne yaptıklarını açık bir şekilde ifade etmelidir. Bu, kodunuzun başka bir geliştirici tarafından anlaşılmasını kolaylaştırır ve gelecekteki değişikliklerde hataların azaltılmasına yardımcı olur.

&#10148; Örneğin, bir liste içindeki öğeleri alfabetik sıraya dizmek istiyorsanız, bu işlevi `alphabetical_order` gibi anlamlı bir isimle adlandırabilirsiniz. Bu, kodunuzun başka bir geliştirici tarafından anlaşılmasını kolaylaştırır.

    function calculateAreaTriangle(base, height) {
      let area = (base * height) / 2;
      return area;
    }

    let baseTriangle = 10;
    let heightTriangle = 5;
    let areaTriangle = calculateAreaTriangle(baseTriangle, heightTriangle);

    console.log(`Üçgenin tabanı ${baseTriangle}, yüksekliği ${heightTriangle} olan üçgenin alanı: ${areaTriangle}`);

&#10148; Bu örnek, üçgenin alanını hesaplayan bir fonksiyon tanımlar ve bu fonksiyonu çağıran bir kod parçası içerir. Fonksiyonun adı, ne yaptığını açıkça belirtir: `calculateAreaTriangle`. Parametre adları da anlamlıdır: `base` ve `height`. Bu sayede, fonksiyonu kullanmak istediğimizde, hangi değerin hangi amaç için kullanıldığı hemen anlaşılabilir.

&#10148; Benzer şekilde, değişkenlerin adları da açıktır: `baseTriangle`, `heightTriangle` ve `areaTriangle`. Bu isimler, değişkenin ne tür bir değeri sakladığını açıkça belirtir. Bu şekilde, kod okunaklığını artırır ve daha kolay anlaşılabilir hale gelir.

#### 3. Kod Tekrarını Önleyin

&#10153; Kod tekrarını önlemek, onun sürdürülebilirliği açısından önemlidir. Kod tekrarını önlemek, kodunuzun daha okunaklı ve anlaşılır hale gelmesini sağlar.

    /**
    * Bu fonksiyon, bir dizideki sayıların toplamını hesaplar ve sonucu geri döndürür.
    *
    * @param {number[]} array - Sayıların bulunduğu dizi
    * @returns {number} Dizideki sayıların toplamı
    */
    function arrayTotal(array) {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
        total += array[i];
      }
      return total;
    }

    // Örnek kullanım
    let numbers = [1, 2, 3, 4, 5];
    let numbersTotal = arrayTotal(numbers);
    console.log("Sayıların toplamı: " + numbersTotal);

&#10153; Bu örnekte, bir fonksiyon tanımlanmıştır. Bu fonksiyon, bir dizideki sayıların toplamını hesaplar ve sonucu geri döndürür. Dizideki her sayı, döngü kullanılarak toplam değişkenine eklenir. Son olarak, toplam değişkeni geri döndürülür.

&#10153; Fonksiyonun kullanımı, bir dizi oluşturarak ve oluşturulan diziye fonksiyonu parametre olarak vererek gerçekleştirilir. Bu sayede, aynı toplama işlemi birkaç kez tekrarlanmak yerine, fonksiyonu kullanarak tekrar kullanılabilir ve daha okunaklı hale getirilebilir.

&#10153; Bu şekilde, "Kod Tekrarını Önleyin" prensibini uygulayarak, kodunuzu daha sade ve daha verimli hale getirebilirsiniz. Ayrıca, bu prensip sayesinde, kodda herhangi bir değişiklik yapmanız gerektiğinde, tüm kod bloklarını değiştirmek yerine, sadece bir fonksiyon veya bileşenin değiştirilmesi yeterli olacaktır.

#### 4. Kodunuzu yorumlayın

&#10149; Kodunuzu yorumlamak, onun sürdürülebilirliği açısından önemlidir. Kodunuzun nasıl çalıştığını ve ne yapması gerektiğini açıklayan yorumlar ekleyin. Bu, başka bir geliştiricinin kodunuzu anlamasını ve geliştirmesini kolaylaştırır. Ayrıca, kodunuzu güncelleştirdiğinizde, yorumlarınızı da güncellemeyi unutmayın.

    /**
    * Bu fonksiyon, iki sayının toplamını hesaplar ve sonucu geri döndürür.
    *
    * @param {number} a - İlk sayı
    * @param {number} b - İkinci sayı
    * @returns {number} İki sayının toplamı
    */
    function addition(a, b) {
      let c = a + b;
      return c;
    }

    // toplama fonksiyonunun kullanımı
    let x = 2;
    let y = 3;
    let z = addition(x, y);

    console.log(z);

&#10149; Bu örnekte, toplama işlemini gerçekleştiren bir fonksiyon tanımlanmıştır. Fonksiyonun başına `/** ... */` açıklama bloğu eklenmiştir. Bu açıklama bloğu, fonksiyonun ne yaptığını, hangi parametreleri aldığını, döndürdüğü değeri ve bu değerin ne anlama geldiğini açıklar. Bu bilgiler, fonksiyonu başka biri tarafından kullanırken ne yapması gerektiğini daha kolay anlamasını sağlar.

&#10149; Ayrıca, fonksiyonun parametreleri ayrıntılı bir şekilde açıklanmıştır. Bu, fonksiyonu kullanacak kişinin, hangi parametrenin ne anlama geldiğini hemen anlamasına yardımcı olur.

&#10149; Kodda ayrıca, fonksiyonun kullanımına dair bir örnek de verilmiştir. Bu da fonksiyonun nasıl kullanılacağı konusunda daha fazla bilgi sağlar. Bu şekilde, kod daha anlaşılır hale gelir ve kullanıcılara yardımcı olur.

#### 5. Kodunuzu test edin

&#10150; Kodunuzu test etmek, onun sürdürülebilirliği açısından önemlidir. Kodunuzun doğru çalıştığından emin olmak için, kodunuzu test edin. Bu, kodunuzun gelecekteki değişikliklerde hata vermesini önler.

&#10150; Örneğin, bir kullanıcının kimlik doğrulama bilgilerini doğru girdiğinde, web uygulamanızın kullanıcıya doğru sayfayı göstermesini sağlamak için bir test yazabilirsiniz.

    /**
    * Bu fonksiyon, iki sayının toplamını hesaplar ve sonucu geri döndürür.
    *
    * @param {number} a - İlk sayı
    * @param {number} b - İkinci sayı
    * @returns {number} İki sayının toplamı
    */
    function addition(a, b) {
      let c = a + b;
      return c;
    }

    // Test kodu
    let x = 2;
    let y = 3;
    let sonuc = addition(x, y);

    if (sonuc === 5) {
      console.log("Test başarılı!");
    } else {
      console.log("Test başarısız!");
    }

&#10150; Bu örnekte, toplama işlemini gerçekleştiren bir fonksiyon tanımlanmıştır. Fonksiyonun yorumları da yazılmıştır.

&#10150; Daha sonra, bir test kodu yazılmıştır. Bu test kodu, toplama fonksiyonunun doğru çalışıp çalışmadığını kontrol eder. Test kodu, toplama fonksiyonuna 2 ve 3 gibi sayılar verir ve dönen sonucu kontrol eder. Eğer sonuç 5 ise, test başarılı olarak kabul edilir ve `"Test başarılı!"` yazısı ekrana yazdırılır. Aksi takdirde, `"Test başarısız!"` yazısı ekrana yazdırılır.

&#10150; Bu şekilde, kodun doğru çalıştığından emin olmak için testler yazmak önemlidir. Testler sayesinde, kodunuzun düzgün çalışıp çalışmadığını kolayca kontrol edebilirsiniz.

#### 6. Kodunuzu düzenli olarak yeniden düzenleyin

&#10151; Kodunuzu düzenli olarak yeniden düzenlemek, onun sürdürülebilirliği açısından önemlidir. Kodunuzu düzenli olarak yeniden düzenlemek, kodunuzun daha okunaklı ve anlaşılır hale gelmesini sağlar. Ayrıca, performansı artırır ve hataları azaltır.

&#10151; Örneğin, bir veritabanı bağlantısı açtığınızda, bunu bir bağlantı havuzu kullanarak yapabilirsiniz. Bu, veritabanı bağlantısını sürekli açıp kapamak yerine, bağlantıları havuzda saklayarak performansı artırır.

    /**
    * Bu fonksiyon, iki sayının toplamını hesaplar ve sonucu geri döndürür.
    *
    * @param {number} a - İlk sayı
    * @param {number} b - İkinci sayı
    * @returns {number} İki sayının toplamı
    */
    function toplama(a, b) {
      return a + b;
    }

    // Test kodu
    let x = 2;
    let y = 3;
    let sonuc = toplama(x, y);

    if (sonuc === 5) {
      console.log("Test başarılı!");
    } else {
      console.log("Test başarısız!");
    }

&#10151; Bu örnekte, önceki örnekteki gibi toplama işlemini gerçekleştiren bir fonksiyon tanımlanmıştır. Ancak, kod daha sade hale getirilmiştir. İşlemler ayrı değişkenlere atanmak yerine, doğrudan geri döndürülmüştür.

&#10151; Ayrıca, test kodu da aynı kalmıştır. Ancak, bu örnekte kodda herhangi bir hata olmadığından, test başarılı olacaktır.

&#10151; Buradaki önemli nokta, kodun sürekli olarak iyileştirilmesidir. Kod, işlevselliği için herhangi bir özellik kaybetmeden daha sade hale getirilebilir. Bu, kodun daha okunaklı ve daha az hata yapma olasılığı olan bir yapıya sahip olmasını sağlar.

#### 7. Kodunuzu sık sık kaydedin

&#10152; Kodunuzu sık sık kaydetmek, onun sürdürülebilirliği açısından önemlidir. Kodunuzu sık sık kaydetmek, kodunuzun kaybolmasını veya bozulmasını önler. Ayrıca, kodunuzu sık sık kaydetmek, kodunuzun sürüm kontrolüne tabi tutulmasını sağlar.

&#10152; Kodunuzu kaydetmek için, kodunuzu bir sürüm kontrol sistemi kullanarak kaydedebilirsiniz. Bu, kodunuzu kaydetmenin en iyi yoludur.

&#10152; Örneğin, bir web uygulaması yazıyorsanız, kodunuzu GitHub gibi bir sürüm kontrol sistemi kullanarak kaydedebilirsiniz.

#### Sonuç olarak, kodunuzun okunaklı, ölçeklenebilir ve sürdürülebilir olmasını sağlamak için yukarıdaki ipuçlarını kullanabilirsiniz. Bu, kod yazma sürecinizi daha kolay ve etkili hale getirir ve gelecekteki değişikliklerde kodunuzu daha kolay yönetmenizi sağlar.

#### **_ Tüm arkadaşlarıma bu süreçte yardımcı olmak temennisiyle . :blush: _**
