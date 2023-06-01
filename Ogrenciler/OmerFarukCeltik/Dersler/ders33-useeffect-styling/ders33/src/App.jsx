import { useEffect, useState } from 'react'
import DenemeComponenti from './components/Deneme';
import './App.css'

function App() {
  const [sayac ,setSayac] = useState(0);
useEffect(() => {
  console.log("Mount useEffect çalıştı");
}, []); //sadece mount olduğunda çalışıyor
useEffect(() => {
  console.log("Didupdate useEffect çalıştı");
});// didupdate: herhangi bir state değiştiğinde çalışıyor
useEffect(() => {
  console.log("stateupdate useEffect çalıştı");
},[sayac]);// didupdate : sayaç statei değiştiğinde çalışır. birden fazla state tanımlanabilir.
useEffect(() => {
  return () => {
  console.log("stateupdate useEffect çalıştı");
}
},[]);// didupdate : sayaç statei değiştiğinde çalışır. birden fazla state tanımlanabilir.

/* Parent component güncellendiğinde childeren componentler güncellenir mi?
 react ile parent component use effect güncellendiğinde componentin children componentleri de güncellenir.*/


  return (
    <>
    <h1 onClick={() => setSayac(sayac+1)}>UseEffect</h1>
    <DenemeComponenti/>
    </>
  )
}

export default App
