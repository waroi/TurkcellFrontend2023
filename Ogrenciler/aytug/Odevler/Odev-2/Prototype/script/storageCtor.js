function StorageCtor() {}

StorageCtor.prototype.getBooksFromLocalStorage = function () {
	return localStorage.getItem("bookList")
		? JSON.parse(localStorage.getItem("bookList"))
		: storageManager.createLocalStorage();
};

StorageCtor.prototype.setLocalStorage = function (localData) {
	localStorage.setItem("bookList", JSON.stringify(localData));
};

StorageCtor.prototype.deleteBookFromLocalStorage = function (bookIdToRemove) {
	console.log(bookIdToRemove);
	let localData = [...storageManager.getBooksFromLocalStorage()];
	console.log(localData);
	localData = localData.filter((b) => b.id !== bookIdToRemove);
	console.log(localData);
	console.error(new Error());
	storageManager.setLocalStorage(localData);
};

StorageCtor.prototype.editLocalStorage = function (oldBookId) {
	let newMovie = getFormData();
	let localData = storageManager.getBooksFromLocalStorage();
	let index = localData.indexOf(localData.find((item) => item.id === oldBookId));
	localData[index] = { id: oldBookId, ...newMovie };
	document.forms["bookForm"]["submitBtn"].classList.replace("btn-warning", "btn-success");
	document.forms["bookForm"]["submitBtn"].innerHTML = "Kaydet";

	StorageCtor.prototype.setLocalStorage(localData);
	render.clearForm();
	render.loadUI();
};

StorageCtor.prototype.createLocalStorage = function () {
	return [
		new Book(
			1,
			"İki Şehrin Hikayesi",
			"Charles Dickens",
			"Tarih",
			"1859",
			"https://www.iskultur.com.tr/dosyalar/2018/03/iki_sehrin_hik.jpg",
			"Manette'in tesadüfen Londra'ya dönüşü sırasında tanıştıkları bir Fransız olan Charles Darnay ile kızının yapacakları evlilik ve bunun ardından meydana gelen Fransız İhtilali'nin hayatlarına etkileri anlatılır. Bu insanların ruhsal değişimlerini ele alan kitapta birçok tarihi izlere de rastlayabiliriz."
		),
		new Book(
			2,
			"Yüzüklerin Efendisi: Yüzük Kardeşliği",
			"J.R.R. Tolkien",
			"Fantastik",
			"1997",
			"https://upload.wikimedia.org/wikipedia/tr/7/74/Y%C3%BCz%C3%BCk_Karde%C5%9Fli%C4%9Fi_Kitap.jpg",
			"Çok eski çağlarda Elf demircileri, güç yüzüklerini sihirli ustalıklarıyla yapmış ve Karanlıkların Efendisi Sauron, bu yüzükleri işleyip kendi gücüyle doldurmuştur. Daha sonra kendisinden çalınan, diğer tüm yüzüklere hükmeden, Tek Yüzüğü bütün gücüyle tüm Orta Dünya'da aramasına rağmen bulamamıştır. Yüzük, Shire Bölgesi'nde yaşayan Frodo Baggins adlı bir hobbitte bulunmaktadır. Ancak çok büyük bir güce sahip bu yüzüğü yok etmek gerekmektedir. Frodo ve arkadaşları, diğer ırklardan gelen arkadaşlarıyla birlikte yüzük kardeşliğini oluşturur ve hepsi bu yolculukta büyücü Gri Gandalf'ı izler."
		),
		new Book(
			3,
			"Küçük Prens",
			"Antoine de Saint-Exupéry",
			"Kurgu",
			"1943",
			"https://upload.wikimedia.org/wikipedia/tr/thumb/f/f5/Kucukprens.jpg/440px-Kucukprens.jpg",
			"Çocukluğundan itibaren büyüklerin yaşadıkları hayat şartları yüzünden, hayal ve yaratıcılığının kaybolduğunu gören kahramanımız. Tanıdığı herkese kendi çizmiş olduğu bir fil' i yutan boğa yılanı resmini gösterir. Ama kimse bu resmi anlayamaz."
		),
		new Book(
			4,
			"Hobbit",
			"J.R.R. Tolkien",
			"Kurgu",
			"1937",
			"https://upload.wikimedia.org/wikipedia/tr/7/71/Hobbit_Kapak.jpg",
			"Roman, Tolkien'ın âdeta bir külliyat oluşturduğu Orta Dünya evreninde, evcimen bir hobbit olan Bilbo Baggins'in Smaug adındaki ejderhanın Erebor'da sahiplendiği hazineden bir pay alma çabasıyla çıktığı yolculuğa ve sonrasında gelişen olaylara odaklanır."
		),
		new Book(
			5,
			"Da Vinci Şifresi",
			"Dan Brown",
			"Roman",
			"2003",
			"https://upload.wikimedia.org/wikipedia/tr/thumb/0/0b/Da_Vinci_%C5%9Eifresi.jpg/220px-Da_Vinci_%C5%9Eifresi.jpg",
			"Sembol uzmanı Robert Langdon, kendini bir anda gizemli bir cinayet olayının içinde bulur. Kurbanlar, torunu ve Robert ile birlikte Da Vinci tablosunda bir takım ip uçları bulan kriptoloji uzmanı Sophie Neveu'dur. Robert ile Sophie, gerçeğe ulaşabilmek için Paris'ten Londra'ya doğru yola çıkarlar."
		),
		new Book(
			6,
			"Simyacı",
			"Paulo Coelho",
			"Roman",
			"1988",
			"https://upload.wikimedia.org/wikipedia/tr/d/d4/Simyac%C4%B1.jpg",
			"Romanın kahramanı Santiago’nun anne ve babası rahip olması için onu papaz okuluna göndermiştir. On altı yaşına geldiğinde rahip olmak istemediğini, okuldan ayrılmayı ve gezginci olmak istediğini babasına söyler. Bunun üzerine babası da, oğluna içinde üç adet altın İspanyol parası olan bir kese vererek oğluna “git, kendine bir sürü al ve en iyi şatonun bizim şatomuz ve en güzel kadınların bizim kadınlarımız olduğunu öğreninceye kadar dünyayı dolaş” der ve oğlunu kutsar. Önce, babasının vermiş olduğu parayla bir koyun sürüsü alır ve yaşamının büyük düşünü gerçekleştirmeye başlar; artık geziyordur."
		),
		new Book(
			7,
			"Harry Potter ve Ölüm Yadigârları",
			"J.K. Rowling",
			"Kurgu",
			"2007",
			"https://upload.wikimedia.org/wikipedia/tr/thumb/2/23/Harry_Potter_ve_%C3%96l%C3%BCm_Yadig%C3%A2rlar%C4%B1.jpg/220px-Harry_Potter_ve_%C3%96l%C3%BCm_Yadig%C3%A2rlar%C4%B1.jpg",
			"Harry, Ron ve Hermione saklandıkları bir yerde 'Voldemort'un adını andıkları için yanı başlarında biten ölüm yiyenler tarafından yakalanırlar çünkü ölüm yiyenler o isme tabu koymuşlardır ve ismin söylenmesi sonucunda koruyucu büyüler kırılarak bir tür sihirsel düzensizlik ortaya çıkar."
		),
		new Book(
			8,
			"Savaş ve Barış",
			"Lev Tolstoy",
			"Roman",
			"1869",
			"https://static.ticimax.cloud/41831/uploads/urunresimleri/buyuk/savas-ve-baris---lev-nikolayevic-tolst--1272a.png",
			"Savaş ve Barış, Napolyon döneminde gecen Rusya ve Fransa arasındakı çekismeli savaşı anlatmasının yanında saray hayatı ve saray insanlarının bulundukları konumlardan nasıl değişikliğe uğradığı da anlatılmaktadır. Savaş, Rusya ile Fransa arasındaki bitmek bilmeyen vahşet; barış ise kişiler arasında yaşanan aşklardır."
		),
		new Book(
			9,
			"Savaş Sanatı",
			"Sun Tzu",
			"Tarih",
			"-600",
			"https://i.dr.com.tr/cache/500x400-0/originals/0000000619168-1.jpg",
			"Sun Tzu, milattan önce 6. Yüzyılda yaşamış olan Çinli bir komutan, filozof ve askeri stratejisttir. Onun “Harp Sanatı” ya da “Savaş Sanatı” olarak anılan ölümsüz eseri, zaferi kazanmak için savaşa nasıl hazırlanmak gerektiğini ve savaşın nasıl yürütülmesi gerektiğini inceleyen bir eserdir."
		),
		new Book(
			10,
			"Yüzüklerin Efendisi: İki Kule",
			"J.R.R. Tolkien",
			"Fantastik",
			"1957",
			"https://i.dr.com.tr/cache/600x600-0/originals/0000000070718-1.jpg",
			"Dünya ikiye bölünmüştür, denir Tolkien'ın yapıtı söz konusu olduğunda: Yüzüklerin Efendisi'ni okumuş olanlar ve okuyacak olanlar. Artık Türkiye'li okur da okumuş olanlar tarafına geçebilecek! 'Yüzüklerin Efendisi' son yüzyılın en çok okunan yüz kitabı arasında en başta geliyor; bilimkurgu, fantezi, polisiye, best-seller yada ana akım demeden, tüm edebiyat türleri arasında tartışmasız bir önderliğe sahip. Bir açıdan bakarsanız bir fantezi romanı, başka bir açıdan baktığınızda, insanlık durumu, sorumluluk, iktidar ve savaş üzerine bir roman. Bir yolculuk, bir büyüme öyküsü; fedakarlık ve dostluk üzerine, hırs ve ihanet üzerine bir roman.Bu ciltte Yüzük kardeşliği dağılıyor. Frodo ve Sam Yüzük'te birlikte Mordor'un kapılarından geçmeye çlaşırken yeni bir yola arkadaşı ediniyorlar. Orklara esir düşen Merry ve Pippin, Orta Dünya'nın en lmeski ırkıyla tanışıyorlar. Aragorn, Gimli ve Legolas ise, Orta Dünya'nın kaderini çizecek büyük savaşların ilkine katılıyorlar..."
		),
		new Book(
			11,
			"Yüzüklerin Efendisi: Kralın Dönüşü",
			"J.R.R. Tolkien",
			"Fantastik",
			"1957",
			"https://i.dr.com.tr/cache/600x600-0/originals/0000000070734-1.jpg",
			"Yüzüklerin Efendisi son yüzyılın en çok okunan yüz kitabı arasında en başta geliyor. Türkçe basımının ilk iki kitabı Yüzük Kardeşliği ve İki Kule, bu ilginin evrenselliğini kanıtladı. Polisiye ya da bilimkurgu meraklıları, şiir, roman ve öykü okurları, hep birlikte Frodo, Sam, Merry, Pippin, Aragorn ve Gandalf'ın maceralarını okumaya, 'Orta Dünya'da yaşamaya başladılar.Üçüncü kitap Kralın Dönüşü ile birlikte Yüzüklerin Efendisi tamamlanıyor: Bu kısımda Karanlıklar Efendisi ile Yüzük Kardeşliği, iki cephede karşı karşıya geliyorlar. Frodo ve Sam ellerinde hepsine hükmedecek Tek Yüzük ile Mordor'un içine, karanlığın kalbine doğru bir yolculuk yaparken, diğerleri de karanlığa karşı son cephe olan Gondor'da umutsuz bir savunmaya girişiyorlar..."
		),
		new Book(
			12,
			"Gazi Mustafa Kemal Atatürk",
			"İlber Ortaylı",
			"Tarih",
			"2018",
			"https://i.dr.com.tr/cache/500x400-0/originals/0001740229001-1.jpg",
			"Tarihin akışını değiştiren, ona mührünü vuran veya büyük tehlikelere mâni olan liderlere her memlekette rastlamak mümkün değildir. Atatürk dünya tarihinin nadiren gördüğü bir dehadır. Birinci Dünya Savaşı'ndan sonra, hiçbir mağlup milletin direniş göstermediği zamanda siviller ve askerlerle dünyaya meydan okumuştur."
		),
	];
};
