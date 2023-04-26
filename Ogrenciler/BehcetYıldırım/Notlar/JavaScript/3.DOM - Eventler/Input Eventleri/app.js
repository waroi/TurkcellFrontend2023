const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);// sayfa yüklendikten sonra olan event.

// function load(e){
//     console.log("sayfa yüklendi");
// };

// Focus
filter.addEventListener("focus", run); 
// Blur
filter.addEventListener("blur", run); // focuslandığın yerden çıktığında oluşan event
// Paste
filter.addEventListener("paste",run);
// Copy
filter.addEventListener("copy",run);
// Cut
filter.addEventListener("cut",run);
// Select
filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
};

