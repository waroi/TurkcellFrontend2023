import { useState, useRef } from "react";
import "./App.css";
import {
  getRandomJoke,
  setCategories,
  setJoke,
  setJokes,
} from "./redux/slices/jokeSlice";
import { useSelector, useDispatch } from "react-redux";
import ChuckJokes from "./services/api";
import { Logo, Container, Buttons } from "./AppStyled";
function App() {
  const searchRef = useRef("");
  const [jokeState, setJokeState] = useState(false);
  const [specialJoke, setSpecialJoke] = useState(false);
  const [searchJoke, setSearchJoke] = useState(false);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();
  const jokeData = useSelector((state) => state.joke);
  const getJoke = () => {
    setJokeState(true);
    ChuckJokes.getRandomJoke().then((res) =>
      dispatch(getRandomJoke(res.value))
    );

    dispatch(getRandomJoke());
  };

  const getSpecialJoke = () => {
    setSpecialJoke(true);
    ChuckJokes.getCategories().then((res) => dispatch(setCategories(res)));
  };

  const categoryJoke = (category) => {
    ChuckJokes.getJokesByCategory(category).then((res) =>
      dispatch(setJoke(res.value))
    );
  };

  const getSearchJoke = () => {
    setSearchJoke(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ChuckJokes.getJokesBySearch(searchRef.current.value.toLowerCase()).then(
      (res) => dispatch(setJokes(res.result))
    );
    setPage(0);
    searchRef.current.value = "";
  };
  return (
    <Container>
      <h2>Chuck Norris Joke</h2>
      <Logo src="/logo.png" alt="chuck" />

      {jokeState && (
        <div className="dialog">
          <div>
            <div className="header">
              <p>Random Joke</p>
              <button className="closeBtn" onClick={() => setJokeState(false)}>
                X
              </button>
            </div>
            {jokeData.joke}
          </div>
        </div>
      )}
      {specialJoke && (
        <div className="dialog">
          <div>
            <div className="header">
              <p>Special Joke</p>
              <button
                className="closeBtn"
                onClick={() => setSpecialJoke(false)}
              >
                X
              </button>
            </div>

            {jokeData.categories.map((category) => (
              <button
                className="categoryBtn"
                key={category}
                onClick={() => categoryJoke(category)}
              >
                {category}
              </button>
            ))}
            <p>{jokeData.joke}</p>
          </div>
        </div>
      )}
      {searchJoke && (
        <div className="dialog">
          <div>
            <div className="header">
              <p>Search Joke</p>
              <button className="closeBtn" onClick={() => setSearchJoke(false)}>
                X
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <input type="search" ref={searchRef} />
            </form>
            {jokeData.jokes.slice(page * 5, page * 5 + 5).map((joke, index) => (
              <p className="joke" key={index}>
                {joke}
              </p>
            ))}
            {page > 0 && (
              <button onClick={() => setPage(page - 1)}>Prev</button>
            )}
            {page < Math.floor(jokeData.jokes.length / 5) && (
              <button onClick={() => setPage(page + 1)}>Next</button>
            )}
          </div>
        </div>
      )}
      <Buttons>
        <button onClick={getJoke}>joke</button>
        <button onClick={getSpecialJoke}>Get a special joke</button>
        <button onClick={getSearchJoke}>Search joke</button>
      </Buttons>
    </Container>
  );
}

export default App;
