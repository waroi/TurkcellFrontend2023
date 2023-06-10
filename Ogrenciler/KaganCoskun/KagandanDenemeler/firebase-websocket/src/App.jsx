import { useEffect, useState } from 'react';
import {firebase} from './firebase';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });
  }, []);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Data:</h1>
       
      </header>
    </div>
  );
}

export default App;