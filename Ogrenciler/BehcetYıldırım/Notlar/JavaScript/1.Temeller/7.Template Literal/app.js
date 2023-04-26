const name = "behcet yıldırım";
const department ="bilişim";
const salary= 4000;


// const a = "İsim: "+name+ "\n"+ "Departman: " +department+ "\n" +"Maaş: " +salary;
//altgr + 2 defa noktalı virgül
const a = `isim:${name}\ndepartman:${department}`;

function b(){
    return "Merhaba";

}

const html = `
    <ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${10/4}</li>
    <li>${b()}</li>
    </ul>
    `;

document.body.innerHTML = html;