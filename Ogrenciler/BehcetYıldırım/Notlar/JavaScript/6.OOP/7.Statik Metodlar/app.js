
class Matematik1{
    cube1(x){
        console.log(x*x*x);
    }
}// Burada cube1 metdounu kullanmak istiyorsak mutlaka bir obje oluşturmamız gerekiyor.
const mat= new Matematik1();
mat.cube1(3);


// Statik Metodlar

class Matematik2{
    static cube2(x){
        console.log(x*x*x);
    }
}

Matematik2.cube2(4)

const mat2 = new Matematik2();

mat2.cube2(4);// Fakat burada static olarak yazdığımız methodu, bu classtan oluşturduğumuz bir obje üzerinde kullanamayız.Staticle yazdığımız cube2 fonksiyonu Matematik2'nin prototype'ine yazılmaz.




