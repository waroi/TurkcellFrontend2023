.list-item:not(:last-child){
  background-color: #cecece;
}
### not ile seçmeyeceğimiz elemanı belirtebiliyoruz.

@media only screen and (max-width:768px) {
  .paragraf{
    font-size: 14px;
  }
}
### max genişlik 768 px e kadar font sized 14 px 768 den büyük haldeyken 24px olur. 

.link{
  font-size: 18px;
  text-decoration: none;
  color:#cecece;
}
.link:visited{
  color: rgb(196, 10, 0);
  ### ziyaret edilmiş sitelerin özelleştirmeleri için visited kullanılıyor. 
  
  .text1::after{
  content: "Bu sonrasına gelen bir yazıdır!";
}
### after sonrasına eklenti yapabilmemizi sağlıyor 
