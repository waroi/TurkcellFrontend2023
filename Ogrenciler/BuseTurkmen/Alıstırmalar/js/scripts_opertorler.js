let val;
const a=10;
const b=5;
const c=5;
let d=3;

//aritmatik operatörler
val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = ++d;
val = d--;
val = --d;

//atama operatörleri
val = a;
val +=a; //val=val+a
val -=a;; //val=val-a
val *=a; //val=val*a
val /=a; //val=val/a

// karsılastırma operatörleri
val = a==b;
val = a!=b;
val = b==c;
val = 5=='5';
val = a===b; // değer ve type kontrolü
val = b===c;
val = b==='c';
val = a<b;
val = a>b;

// mantıksal operatörler
    // && (and)
        // true && true -> true
        // true && false -> false
        // false && false -> false
    val = (a>b) && (a>c)

    // || (or)
        // true || true -> true
        // true || false -> true
        // false || false -> false
    val = (a<b) || (a<c)

    // (not)
        // true -> false
        // false -> true
    val = !(a>b);


console.log(val);
console.log(typeof val);