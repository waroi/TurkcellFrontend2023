import "./App.css";
import Deneme from "./deneme";

function App() {
  let name = "Buse";
  return (
    <div className="App">
      <Deneme />
      <header className="App-header">
        Ben {name}
        <Deneme />
        <ul>
        <li>buse</li>
        <li>buse</li>
        <li>buse</li>
      </ul>
      <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
    <textarea>
      Content of the textarea.
    </textarea>
      </header>
      <section className="content">FrontEnd-React-Deneme-2023</section>
      <section className="text">Deneme</section>
      

    </div>
  );
}

export default App;
