[Turn Back](../../../)

<h1 align="center">Ders32 - Vite Project</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react" width="33" height="35"/> </a> </p>

# React Introduction

## Vite Nedir?

&#10147; Vite, modern web uygulamaları geliştirmek için hızlı, esnek ve verimli bir geliştirme aracıdır. 

&#10147; Özellikle Vue.js ve React gibi JavaScript framework'leriyle kullanıldığında oldukça popülerdir. Vite, geliştirme sürecinde bir dizi avantaj sunar:

1. <b>Hızlı Başlangıç:</b> Vite, hızlı bir geliştirme süreci sunar. Geliştirme sunucusu, modüllerin yalnızca gerektiğinde derlenmesini sağlar ve bu da uygulama yükleme süresini önemli ölçüde azaltır. Dosyalar arasında hızlı geçişler yapabilme yeteneği, geliştirme sürecini daha verimli hale getirir.

2. <b>Esneklik:</b> Vite, geliştiricilerin istedikleri herhangi bir JavaScript framework'üyle çalışmalarına olanak tanır. Vite, Vue.js ve React gibi framework'lerle kullanıldığında, geliştiricilerin uygulamalarını hızlı bir şekilde başlatmalarına ve geliştirmelerine olanak tanır.

3. <b>Etkin Modül Yönetimi:</b> Vite, geliştirme sürecinde modüllerin hızlı bir şekilde yüklenmesini sağlar. Modüllerin gerçek kullanımını analiz eder ve yalnızca ihtiyaç duyulan modülleri yükler. Bu, proje boyutunu ve yükleme süresini azaltır.

4. <b>ES Module Desteği:</b> Vite, JavaScript modülleri için ECMAScript Module (ESM) standardını destekler. Bu, tarayıcıda modüllerin doğrudan çalışmasını sağlar ve Babel veya Webpack gibi araçlara ihtiyaç duymaz. Bu sayede geliştirme süreci daha basit ve hızlı olur.

5. <b>Hot Module Replacement:</b> Vite, Hot Module Replacement (HMR) özelliğini destekler. Bu, geliştiricilerin uygulamalarını yeniden yüklemeden değişiklikleri görmelerini sağlar. Bu, geliştirme sürecini hızlandırır.

6. <b>Production Modu:</b> Vite, geliştirme sürecinde olduğu gibi üretim modunda da hızlıdır. Üretim modunda, Vite, uygulamayı optimize eder ve uygulamanın yükleme süresini azaltır.

7. <b>Plugin Desteği:</b> Vite, geliştiricilerin uygulamalarına özel özellikler eklemelerine olanak tanıyan bir dizi eklenti sunar. Vite, geliştiricilerin uygulamalarını ihtiyaçlarına göre özelleştirmelerine olanak tanır.

8. <b>Hızlı Derleme Süresi: </b>  Vite, uygulamanızı derlemek için sadece gerektiği kadar zaman harcar. Sadece değişiklik yapılan dosyaları derler ve hızlı bir şekilde sonucu günceller. Bu da geliştirme sürecini hızlandırır.

## Vite Kurulumu

&#10147; Vite, Node.js paket yöneticisi olan npm ile kurulabilir.

&#10147; Vite, npm 7.0.0 veya daha yüksek sürümlerini gerektirir.

#### Example

    npm init vite-app my-app
    cd my-app
    npm install
    npm run dev

&#10148; React, Vite tarafından desteklenen bir framework olduğundan, React projenizi Vite ile kolayca kurabilirsiniz. İşte Vite ile React projesi oluşturmak için adımlar:

### Adım 1: Vite İle Boş Bir Proje Oluşturma

&#10148; İlk adım olarak, terminalinizi açın ve bir proje klasörü oluşturun:

    mkdir react-vite-projesi
    cd react-vite-projesi

&#10148; Daha sonra, Vite ile boş bir proje oluşturmak için aşağıdaki komutu çalıştırın:

    npm init vite-app

&#10148; Komutu çalıştırdıktan sonra, aşağıdaki soruları yanıtlamanız istenecektir:

    Project name: react-vite-projesi
    Project root directory: (react-vite-projesi)
    Select a framework: (Use arrow keys)
    > react
    vue
    vanilla
    Select a variant: (Use arrow keys)
    > react
    react-js

&#10148; Bu soruları yanıtladıktan sonra, Vite, proje klasörünüzde boş bir React projesi oluşturacaktır.

<b>Note</b>&#10071; Bunun kısaca yazılımı şu şekildedir:

    npm create-vite-app react-vite-projesi --template react

&#10148; Bu komutu çalıştırdıktan sonra, aşağıdaki çıktıyı göreceksiniz:

    $ npm create-vite-app react-vite-projesi --template react

    ? Select a framework: › react
    ? Select a variant: › react-js
    Scaffolding project in /Users/username/react-vite-projesi...

    Done. Now run:

    cd react-vite-projesi
    npm install
    npm run dev

### Adım 2: Proje Bağımlılıklarını Yüklemek

&#10148; Proje klasörüne geçtikten sonra, gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

    $ cd react-vite-projesi
    $ npm install

&#10148; Bu komut, projenin package.json dosyasındaki bağımlılıkları indirir ve yükler.

### Adım 3: Geliştirme Sunucusunu Başlatma

&#10148; Bağımlılıklar yüklendikten sonra, aşağıdaki komutu çalıştırarak geliştirme sunucusunu başlatın:

    $ npm run dev

&#10148; Bu komut, Vite geliştirme sunucusunu başlatır ve React uygulamanızı tarayıcınızda görüntüler.

    vite v2.6.4 dev server running at:

    > Local: http://localhost:3000/
    > Network: use `--host` to expose

    ready in 1.03s.

&#10148; Artık Vite ile oluşturduğunuz React projesi hazır! Tarayıcınızda http://localhost:3000 adresini açarak React uygulamanızı görüntüleyebilirsiniz. src/App.js dosyasını düzenleyerek veya yeni bileşenler ekleyerek uygulamanızı geliştirebilirsiniz.

&#10148; Bu şekilde Vite ile React projenizi başlatabilir ve hızlı bir şekilde geliştirebilirsiniz. Vite'in sağladığı hızlı derleme süreleri ve etkin modül yönetimi, geliştirme sürecinizi daha verimli hale getirecektir. 


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders32/vite-project/src/assets/media.gif)
