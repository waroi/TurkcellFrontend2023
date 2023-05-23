import{useState} from 'react' //import etmesende çalışır, reactten alacağın şeyler varsa yazmalısın


//useState ile state tanımlanır

const Deneme = () => {
  const [count, setCount] = useState(0) //count state, setCount ise count stateini güncellemek için kullanılır
 // count = 5 //bu şekilde güncellenmez
 // setCount(5) //bu şekilde güncellenir
  return (
    <div>
     <div>
      {count}
     </div>
     <button onClick={() => setCount(count+1)}>Arttır</button>
    </div>
  )
}

export default Deneme ;
