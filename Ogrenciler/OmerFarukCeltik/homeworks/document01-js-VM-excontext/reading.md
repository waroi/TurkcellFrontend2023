# [Execution Stack ve Execution Context Nedir?](https://serbestemre.medium.com/execution-stack-ve-execution-context-nedir-ee99dd9ed925)
https://serbestemre.medium.com/execution-stack-ve-execution-context-nedir-ee99dd9ed925

## Execution Stack
Bir JavaScript uygulaması çalıştırıldığında içinde çağırılan fonksiyonları ve bunların sakladığı bilgileri tutmak için Stack adı verilen bir veri yapısı kullanılır ve buna **Execution Stack** denilir. 
Stack veri yapısı **LIFO (Last in First Out)** mantığıyla çalışır ve belirli bir limiti vardır.

## Execution Context

Bir fonksiyonun içinde tanımlanan tüm bilgilerinin tutulduğu yapı olarak düşünülebilir. İki tip Execution Context’ten bahsedebiliriz.

### Global Execution Context
İçerisine hiç kod yazmadığımız bir JavaScript uygulamasını çalıştırdığımızda bile JavaScript tarafından yaratılan yapıya Global Execution Context denilir. Her zaman **JavaScript uygulaması başlatıldığında Execution Stack içine ilk olarak Global Execution Context push edilir** ve Global Object yaratılır. Browser da objenin adı **window** olarak adlandırılır ve **this** anahtar kelimesiyle ulaşılabilir.

### Functional Execution Context
Her çalıştırılan fonksiyon için memory de özel bir yer ayrılır ve bu fonksiyonun tüm bilgileri burada tutulur. Fonksiyonlar çalıştırıldığı anda **ona ait olan Execution Context yaratılır ve Execution Stack’a push edilir.** Fonksiyonun çalışması bittiği anda bu fonksiyona ait olan Execution Context pop edilerek stackten çıkartılır.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*8YttCSmQs3xg1Mrwt4b6vQ.png)


---

# [Variable ve Lexical Environment Nedir? Scope Chain Bu İşin Neresinde?](https://serbestemre.medium.com/variable-ve-lexical-environment-nedir-scope-chain-bu-i̇şin-neresinde-f85cccc343af)
1. https://serbestemre.medium.com/variable-ve-lexical-environment-nedir-scope-chain-bu-i̇şin-neresinde-f85cccc343af
2. https://medium.com/frontend-development-with-js/execution-context-lexical-environment-scope-ve-clousure-anlamak-407d1dba185c

Her fonksiyon çağırıldığında ona ait Execution Context, stack içine eklenir. Fakat bu Execution Context nasıl yaratılıyor? 
*Execution Context içinde this anahtar kelimesinin atama bilgisi*, Variable Environment ve Lexical Environment içerik bilgilerinden oluşur.

### Creation Stage (Yaratılma Aşaması)
**this** anahtar kelimesinin atama işlemi bu aşamada gerçekleşir.
Variable Environment (Değişken Ortamı) bu aşamada tanımlanır ve *var ile tanımlanan değişken bilgileri **undefined** olarak tanımlanır*.
Lexical Environment (Anlamsal Ortam) bu aşamada Variable Environment’in kopyasıdır.

### Execution Stage (Çalışma Aşaması)
Tanımlanan değişkenlerin değer atamaları yapılır.

**Lexical Environment diğer fonksiyon bağlamının diğer fonksiyon bağlamlarıyla ilişkilendirmesini yapar**

**Hoisting** işte bu Creation(Oluşturma) fazında değişkenleri ve fonksiyonları yukarı taşıma özelliği sayesinde değişken ve fonksiyonlara çalıştırılan kodun ilerisinde olması durumunda bile kodun çalışabilmesi..

```
var car = 'Audi';
var place = 'London';

function buyVehicle () {
    var car = 'Mercedes';
    var motorCylce = 'Yamaha'
    
    function drive () {
        var car = 'BMW';
        
        console.log('I am driving a ', car);
        console.log('I have a', motorCylce);
        console.log('I wish I had a ', yacht);
    }

    console.log('I bought a ', car);
    drive();
}

function walk() {
    var yacht = 'Beneteau';

    console.log('I am going to ', place)
 }

console.log('I have an ', car);

walk();
buyVehicle();
```

1. Satır 26: ekrana yazdırılmak istenen car değişkeni içinde bulunulan Global Context içinde tanımlı olduğu için ekrana ilk olarak I have an Audi yazdırılır.


2. Satır 28: walk() fonksiyonu çağırılır ve (satır 23) ekrana yazdırılmak istenen place değişkeni walk() contextinde olmadığı için parent context olan Global Context içinden okunur ve ekrana I’m going to London yazdırılır.

3. Satır 29: buyVehicle() fonksiyonu çağırılır. İki farklı car ve motorCycle değişkenleri bu context içinde tanımlanır ve ekrana bu context içinde daha önce tanımlı bir car değişkeni olduğu için I bought a Mercedes yazdırılır.

4. Satır 17: drive() fonksiyonu çağılır. Burada da car adında bir değişken farklı bir değerle tanımlandıktan (satır 11) sonra ekrana I am driving a BMW yazdırılır. motorCycle değişkeni tanımlı olmadığından dolayı parent context olan buyVehicle() contextinden okunur ve ekrana (satır 12) I have a Yamaha yazdırılır.

5. Satır 13: ekrana yacht değişkeni kullanılarak I have a ... yazdırılmak istenir fakat bu context içinde yacht değişkeni tanımlı olmadığından dolayı parent context olan buyVehicle() contextine erişilir. yacht değişkeni burada da tanımlı olmadığından Global Context’e erişilip bu değişken aranır. Fakat burada da yacht ismiyle bir değişken tanımlanmadığı için ReferenceError: yacht is not defined hatası fırlatılır.

Not: **walk() contexti içinde tanımlı bir yacht değişkeni vardır fakat bu contextler arasında bir bağlantı olmadığı için bu değişkene erişim sağlanamaz**

**scope chain mantığı/ yatch tanımına bu sebepten dolayı erişemiyoruz.**

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*9qSU6M-PvCbgaNKIhNo_iw.png)


Özetlemek gerekirse 
**Variable Environment her fonksiyonun kendi içinde tanımlanan fonksiyonların ve değişken değerlerinin saklandığı yer.**
**Lexical Environment ise bir context içinde tanımı bulamayan bir değişkenin hangi contexte araması gerektiğinin adresinin tutulduğu yapı olarak düşünülebilir.**

### clousure

saySomething fonksiyonu bir fonksiyon ref dönüyor ve işini bitirip ExecutionContext siliniyor. Peki nasıl oluyorda return eden who parametresi alan fonksiyonu çağırdığımızda bu fonksiyon something değişkenindeki değeri hatırlayabiliyor ? Çünkü bunun işi bittiği için stack atılmış ve değişkeninde silinmiş olması gerekiyordu.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*XkLQPwU6ptP44E0D9RhpNg.png)


ExecutionContext siline bile onu çevreleyen {} blockta bu değişkenlere ihtiyaç duyan fonksiyon bloğu var ise Closure yeneği sayesinde silinen ExecutionContext değerleri tutulmaya devam ediyor. Bu sayede aşağıdaki örnekte “Merhaba” değeri daha hala kullanılabiliyor oluyor.

---

