

// UI örneği oluşturma ve form işlemlerini başlatma
const ui = new UI();
const storage = new Storage();
const sorting = new Sorting();
const filter = new Filter();
const search = new Search();

search.main();
ui.main();
ui.addBookToUI(); //LS'den kitapları çekme
ui.addMockData(); //Json dosyasından kitapları çekme
filter.generateFilterOptions();
filter.main();



