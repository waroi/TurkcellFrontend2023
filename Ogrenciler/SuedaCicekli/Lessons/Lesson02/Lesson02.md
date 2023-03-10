[Ders Notlarına Geri Dön](../../README.md)

# Ders 02 Notlarım

Bu ders'de html taglerini uygulamaya devam ettik.

## `<Table>` , `<tr>` , `<th>` ,`<td>` Paragraf Etiketleri

`<Table>` etiketi tablo verilerini temsil eder. Satır ve sütunlardan oluşan iki boyutlu bir tablo sunar.
`<tr>` etiketi tablodaki bir hücrenin sırasını temsil eder. Daha sonra (veri hücresi) ve (başlık hücresi) öğelerinin bir karışımı kullanılarak oluşturulabilir.
`<th>` (table header cell): Bu etiket, tablonun başlık hücrelerini belirtmek için kullanılır. Genellikle kalın ve merkezlenmiş bir şekilde görüntülenir.
`<td>` table data cell): Bu etiket, tablodaki veri hücrelerini belirtmek için kullanılır. Genellikle ince ve sol hizalı bir şekilde görüntülenir.

    <table >
      <tr>
        <th>İsim</th>
        <td>Sueda</td>
      </tr>
      <tr>
        <th>Soyisim</th>
        <td>Çiçekli</td>
      </tr>
    </table>

Kodun çıktısı bu şekilde:

<table >
  <tr>
    <th>İsim</th>
    <td>Sueda</td>
  </tr>
  <tr>
    <th>Soyisim</th>
    <td>Çiçekli</td>
  </tr>
</table>

## `<iframe>` The Inline Frame Etiketi

`<iframe>` bir web sayfasının içerisine farklı bir web sayfasını çağırıp, görüntülememize yardımcı olan bir HTML etiketidir.

    <iframe  src="https://reactjs.org/docs/getting-started.html"  width="280px"  height="157px"  title="React">
    </iframe>

> src'ye eklemek istediğimiz içeriğin linkini veriyoruz ayrıca width ve
> height ile görüntüleyeceğimiz sayfanın yükseklik ve genişliğini inline olarak da
> ayarlayabiliriz.

## `<video>` Etiketi

HTML `<video>` öğesi, bir web sayfasında video göstermek için kullanılır.

    <video  width="280"  height="157"  controls>
    <source  src="./Assets/madrigal-seni-dert-etmeler-official-audio.mp4"  type="video/mp4">
    </video>

controls özelliği ile oynatma, duraklatma ve ses düzeyi gibi video denetimler eklenir.

## `<Audio>` Etiketi

Web sayfasına ses eklemek için kullanılabilir.`<audio>` etiketi, birçok farklı ses formatını destekler, örneğin MP3, OGG vs.

    <audio  controls>
    <source  src="./Assets/Sen Varsın Diye.mp3"  type="audio/ogg">
    </audio>
