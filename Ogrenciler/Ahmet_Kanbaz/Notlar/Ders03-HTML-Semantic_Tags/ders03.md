# Ders-03: HTML Semantic Tags  
## Konular: em, i, b, strong, u, del, header, nav, article, section, aside, footer  
HTML etiketleri kullanılarak yazı içerisinde bazı kısımların şeklini değiştirmek mümkündür. İstenilen kısma italik, kalın, üstü çizili gibi özellikler verilebilir. Bu özellikler sayesinde de yazının öne çıkan kelime veya kelime gruplarını yazıdan daha farklı şekilde göstermemize olanak sağlamaktadır. Bu etiketleri kullanmak yerine CSS kullanarak da o kısımlara istenilen özellikler verilebilir. Ancak arama motorları sitemizde bulunan içerikleri daha doğru bir şekilde indekslemesi için bu etiketleri gerektiği yerlerde kullanmamız gerekmektedir.  
### 1. em Etiketi  
`<em>` etiketi, kullanılan yazı kısmını italik hale getirmektedir. Varsayılan CSS’i italik’tir.  
`<p> Lorem ipsum dolor sit <em>amet consectetur adipisicing elit.</em> Sint corrupti nisi dolorum illo, dicta ratione animi nihil fugit corporis quam? </p>`  
### 2. i Etiketi  
`<i>` etiketi, metnin bir kısmını italik olarak göstermemizi sağlar.  
`<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <i>Sint corrupti nisi dolorum illo, dicta ratione</i> animi nihil fugit corporis quam?</p>`  
### 3. b Etiketi
`<b>` etiketi, belirlenen kısımdaki yazıyı kalın olarak tanımlamaktadır.
`<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti nisi dolorum illo, dicta ratione animi <b>nihil fugit corporis</b> quam?</p>`  
### 4. strong Etiketi  
`<strong>` etiketi de metni kalın olarak tanımlamamızı sağlamaktadır.  
`<p> Lorem ipsum <strong>dolor sit amet consectetur</strong> adipisicing elit. Sint corrupti nisi dolorum illo, dicta ratione animi nihil fugit corporis quam?</p>`  
### 5. u Etiketi  
`<u>` etiketi, istenilen metni altı çizili (underline) olarak yazmak için kullanılmaktadır.  
`<p> Lorem ipsum dolor sit amet <u>consectetur adipisicing elit.</u> Sint corrupti nisi dolorum illo, dicta ratione animi nihil fugit corporis quam?</p>`  
### 6. del Etiketi  
`<del>` etiketi, bir belgeden silindi metin aralığı işaretlemek için kullanılır. Belirlenen metnin üstünü çizmektedir. Bu işlemi CSS kullanarak da yapmak mümkündür. text-decoration özelliği kullanılarak tanımlanabilir.  
`<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <del>Sint corrupti nisi dolorum illo, dicta ratione</del> animi nihil fugit corporis quam? </p>`  

#### 