import RandomJoke from "../components/RandomJoke/RandomJoke";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";
import { setRandomJoke } from "../redux/slices/randomJokeSlice";
import { JokeControls } from "../components/JokeControls";
import Share from "../components/Share/Share";
const RandomView = () => {
  const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  const dispatch = useDispatch();
  const myCategory = useSelector((state) => state.category);

  const fetchJoke = () => {
    if (myCategory == "All") {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => dispatch(setRandomJoke(data.value)));
    } else {
      fetch(`https://api.chucknorris.io/jokes/random?category=${myCategory}`)
        .then((res) => res.json())
        .then((data) => dispatch(setRandomJoke(data.value)));
    }
  };

  useEffect(() => {
    fetchJoke();
  }, [myCategory]);

  const handleSelectChange = (e) => {
    dispatch(setCategory(e.target.value));
  };
  return (
    <div>
      <RandomJoke />
      <JokeControls>
        <select
          value={myCategory}
          onChange={handleSelectChange}
          name="jokeCat"
          id="jokeCat"
        >
          <option value="All">All</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button className="btn btn-primary p-3 fs-4" onClick={fetchJoke}>Get Joke</button>
      </JokeControls>
      <Share />
    </div>
  );
};

export default RandomView;
