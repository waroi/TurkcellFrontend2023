const cardbody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event

title.addEventListener("click",function(e){
    console.log(e.type);
});

// Double click event
title.addEventListener("dblclick",function(e){
    console.log(e.type);
});

// Mouse down event --> tıklamaya devam ederken

title.addEventListener("mousedown",function(e){
    console.log(e.type);
});

// Mouse up event --> tıklamayı bıraktıktan sonra
title.addEventListener("mouseup",function(e){
    console.log(e.type);
});

// Mouse over eventi --> elementin üzerine geldiğimizde oluşan event
title.addEventListener("mouseover",function(e){
    console.log(e.type);
});
// Mouse out eventi --> elementin üzerinden gittiğimizde oluşan event
title.addEventListener("mouseout",function(e){
    console.log(e.type);
});



